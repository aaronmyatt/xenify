import { ref } from "vue";
import fetchProducts from "./fetchProductsFromStorage";

interface Product {
  name: string;
  description: string;
  squareImage: string;
  verticalImage: string;
  price: number;
}

const currentSearch = ref<Product[]>([]);

// TODO: search currently breaks the dummy index based id system I've implemented - 𝑠ℎ𝑟𝑢𝑔 -

export default function () {
  const { products } = fetchProducts();
  const search = (term: string) => {
    if (term !== '') {
      currentSearch.value = products.filter((item) => {
        const lowerTerm = term.toLowerCase()
        const name = item.name.toLowerCase()
        const description = item.description.toLowerCase()
        return name.includes(lowerTerm) || description.includes(lowerTerm);
      });
    } else {
      currentSearch.value = products;
    }
  };

  currentSearch.value = products

  return {
    search,
    currentSearch,
  };
}
