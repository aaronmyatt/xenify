import { ref, computed } from "vue";
import fetchProduct from "./fetchOneProductFromStorage";

type Cart = Array<Array<Product>>;

interface Product {
  name: string;
  description: string;
  squareImage: string;
  verticalImage: string;
  price: number;
}

const cart = ref<Cart>([]);

export default function () {
  const totalItems = computed(() => {
    return cart.value
      .filter((item) => {
        return item !== null;
      })
      .flatMap((item) => {
        return item;
      }).length
  });

  const total = computed(() => {
    return cart.value
      .filter((item) => {
        return item !== null;
      })
      .flatMap((item) => {
        return item;
      })
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
  });

  const addToCart = function (productId: number) {
    if (window && window.localStorage) {
      const { product } = fetchProduct(productId);
      // ensure an array exists for this product id
      cart.value[productId] = cart.value[productId] || [];
      cart.value[productId].push(product);
      saveCart();
    }
  };

  const fetchCart = function () {
    const emptyCart = JSON.stringify({ data: [] });
    if (window && window.localStorage) {
      cart.value = JSON.parse(
        window.localStorage.getItem("cart") || emptyCart
      ).data;
    }
  };

  const saveCart = function () {
    window.localStorage.setItem("cart", JSON.stringify({ data: cart.value }));
  };

  const emptyCart = function () {
    cart.value = [];
    saveCart()
  };

  fetchCart();

  return {
    addToCart,
    emptyCart,
    cart,
    total,
    totalItems
  };
}
