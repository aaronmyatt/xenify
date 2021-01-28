<script lang="tsx">
import { defineComponent } from "vue";
import Layout from "../components/Layout.vue";
import Button from "../components/base/Button.vue";
import useCart from "../composables/useCart";

export default defineComponent({
  render() {
    return (
      <div>
        <Layout
          v-slots={{
            header: "Your Cart",
          }}
        >
          <div class="p-8 space-y-4">
            <ul class="divide-y divide-gray-200">
              {this.cart.map((item) => (
                <li class="flex justify-between py-4">
                  <div class="flex">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={item.product.squareImage}
                      alt=""
                    />
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">
                        {item.product.name}
                      </p>
                      <p class="text-sm text-gray-500">x {item.numberOf}</p>
                    </div>
                  </div>
                  <div class="ml-3 place-self-end">
                    <p class="text-lg font-medium text-gray-900">
                      ${item.subTotal}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div class="flex justify-between">
              <Button
                v-slots={{
                  default: () => "Checkout",
                }}
              ></Button>
              <span class="text-xl font-medium text-gray-900">Total: ${this.total}</span>
            </div>
          </div>
        </Layout>
      </div>
    );
  },
  components: {
    Layout,
  },
  setup: () => {
    const { cart, total } = useCart();

    const prepCart = cart.value
      .filter((item) => {
        return item !== null;
      })
      .map((item) => {
        return {
          numberOf: item.length,
          product: item[0],
          subTotal: item.reduce(
            (accumulator, currentValue) => accumulator + currentValue.price,
            0
          ),
        };
      });

    return {
      cart: prepCart,
      total,
    };
  },
});
</script>