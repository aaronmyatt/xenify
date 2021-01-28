<script lang="tsx">
import { defineComponent } from "vue";
import Layout from "../../components/Layout.vue";
import Button from "../../components/base/Button.vue";
import { useRoute } from "vue-router";
import fetchProduct from "../../composables/fetchOneProductFromStorage";
import useCart from "../../composables/useCart";

// template stolen from: https://tailblocks.cc/

export default defineComponent({
  render() {
    return (
      <div>
        <Layout>
          <section class="overflow-hidden text-gray-600 body-font">
            <div class="p-8 mx-auto">
              <div class="flex flex-wrap mx-auto lg:flex-wrap-nowrap">
                <div class="lg:w-1/2">
                  <img
                    alt=""
                    class="rounded-xl lg:hidden"
                    src={this.product.squareImage}
                  />
                  <img
                    alt="ecommerce"
                    class="hidden rounded-xl lg:block"
                    src={this.product.verticalImage}
                  />
                </div>
                <div class="space-y-8 lg:w-1/2 lg:mt-0">
                  <div class="flex">
                    <h1 class="mb-1 text-3xl font-medium text-gray-900 title-font">
                      {this.product.name}
                    </h1>
                  </div>
                  <p class="leading-relaxed">{this.product.description}</p>
                  <div class="flex justify-between">
                    <span class="text-2xl font-medium text-gray-900 title-font">
                      ${this.product.price}
                    </span>
                    <Button
                      action={this.addToCart}
                      v-slots={{
                        default: () => "Add To Cart",
                        icon: () => (
                          <svg
                            class="w-5 h-5 text-gray-50"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        ),
                      }}
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    );
  },
  components: {
    Layout,
    Button,
  },
  setup: () => {
    const route = useRoute();
    const productId = Number(route.params["id"]) - 1;
    const { product } = fetchProduct(productId);

    const { addToCart } = useCart();

    return {
      product,
      addToCart: () => {
        addToCart(productId);
      },
    };
  },
});
</script>