<script lang="tsx">
import { defineComponent } from "vue";
import Layout from "../components/Layout.vue";
import ProductCard from "../components/ProductCard.vue";
import fetchProducts from '../composables/fetchProductsFromStorage';

export default defineComponent({
  name: "Index",
  render() {
    return (
      <div>
        {this.products}
        <Layout>
          <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {this.products.map((product, index) => (
              
              <li class="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow">
                <ProductCard productId={index+1} name={product.name} price={product.price} image={product.squareImage} description={product.description} />
              </li>
            ))}
          </ul>
        </Layout>
      </div>
    );
  },
  components: {
    Layout,
    ProductCard,
  },
  setup() {
    const { products } = fetchProducts()
    return { products }
  },
});
</script>