<script lang="tsx">
import { defineComponent, computed } from "vue";
import Layout from "../components/Layout.vue";
import Button from "../components/base/Button.vue";
import DangerButton from "../components/base/DangerButton.vue";
import useCart from "../composables/useCart";

export default defineComponent({
  render() {
    let cartList;

    if (this.cart.length) {
      cartList = this.cart.map((item) => (
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
            <p class="text-lg font-medium text-gray-900">${item.subTotal}</p>
          </div>
        </li>
      ));
    } else {
      cartList = (
        <li class="flex items-center justify-center py-4">Cart Empty</li>
      );
    }

    return (
      <div>
        <Layout
          v-slots={{
            header: "Your Cart",
          }}
        >
          <div class="p-8 space-y-4">
            <ul class="divide-y divide-gray-200">{cartList}</ul>
            <div class="flex justify-between">
              <DangerButton
                action={this.emptyCart}
                v-slots={{
                  default: () => "Clear Cart",
                }}
              ></DangerButton>
              <div class="flex items-center space-x-4">
                <span class="text-xl font-medium text-gray-900">
                  Total: ${this.total}
                </span>
                <Button
                  action={ () => { alert(`Didn't get to the API integratio sadly.`) } }
                  v-slots={{
                    default: () => "Checkout",
                  }}
                ></Button>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  },
  components: {
    Layout,
    Button,
    DangerButton,
  },
  setup: () => {
    const { cart, total, emptyCart } = useCart();

    const prepCart = computed(() => {
      return cart.value
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
    });

    return {
      cart: prepCart,
      total,
      emptyCart,
    };
  },
});
</script>