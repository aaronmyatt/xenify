<script lang="tsx">
import { defineComponent } from "vue";
import Layout from "../components/Layout.vue";
import ProductCard from "../components/ProductCard.vue";
import useSearch from "../composables/useSearch";

export default defineComponent({
  name: "Index",
  render() {
    let productList;

    if (this.products.length === 0) {
      productList = (
        <li class="flex flex-col text-center bg-white divide-y divide-gray-200 rounded-lg shadow">
          <ProductCard
            image={"https://via.placeholder.com/400/400 "}
            name={"No Item Found"}
            displayActionBar={false}
          />
        </li>
      );
    } else {
      productList = this.products.map((product, index) => (
        <li class="flex flex-col text-center bg-white divide-y divide-gray-200 rounded-lg shadow">
          <ProductCard
            productId={index + 1}
            name={product.name}
            price={product.price}
            image={product.squareImage}
            description={product.description}
          />
        </li>
      ));
    }
    return (
      <div>
        <Layout>
          <ul class="grid gap-6 overflow-y-auto sm:hidden grid-horizontal-full scroll-snap-x overscroll-contain sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:auto-rows-auto">
            {productList}
          </ul>
          <ul class="hidden gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:auto-rows-auto">
            {productList}
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
    const { currentSearch } = useSearch();
    return { products: currentSearch };
  },
});
</script>