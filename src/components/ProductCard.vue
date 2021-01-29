<script lang="tsx">
import { defineComponent, withModifiers } from "vue";
import useCart from "../composables/useCart";

export default defineComponent({
  props: {
    productId: Number,
    name: String,
    price: Number,
    image: String,
    description: String,
    displayActionBar: {
      type: Boolean,
      default: true
    }
  },
  render() {
    let actionBar;

    if (this.displayActionBar) {
      actionBar = (
        <div>
          <div class="flex items-end divide-x divide-gray-200 m-mt-px">
            <div class="flex flex-1 w-0">
              <router-link
                to={{
                  name: "product-id",
                  params: {
                    id: this.productId,
                  },
                }}
                href="#"
                class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <svg
                  class="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="ml-3">Details</span>
              </router-link>
            </div>
            <div class="flex flex-1 w-0 -ml-px">
              <button
                onClick={this.addToCart}
                class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <svg
                  class="w-5 h-5 text-gray-400"
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
                <span class="ml-3">Buy</span>
              </button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div
        ref="pcard"
        class={`border-2 border-transparent rounded-lg ${
          this.toggleAnimation ? this.animation : ""
        }`}
      >
        <router-link
          to={{
            name: "product-id",
            params: {
              id: this.productId,
            },
          }}
        >
          <div class="flex flex-col flex-1">
            <div class="aspect-w-1 aspect-h-1">
              <img
                class="mx-auto bg-black border border-transparent rounded-t-lg"
                src={this.image}
                alt=""
              ></img>
            </div>
            <h3 class="mt-6 text-sm font-medium text-gray-900">
              {this.name} { this.description ? `- $${this.price}` : '' }
            </h3>
            <dl class="flex flex-col justify-between flex-grow mt-1">
              <dt class="sr-only">Product Description</dt>
              <dd class="text-sm text-gray-500">{this.description}</dd>
            </dl>
          </div>
        </router-link>
        {actionBar}
      </div>
    );
  },
  data() {
    return {
      toggleAnimation: false,
      animation: "magictime slideUp",
    };
  },
  setup(props) {
    const { addToCart } = useCart();
    return {
      addToCart: () => addToCart(props.productId - 1),
    };
  },
  mounted() {
    var touchstartY = 0;
    var touchendY = 0;
    var touchstartX = 0;
    var touchendX = 0;

    this.$refs.pcard.addEventListener(
      "touchstart",
      function (event) {
        touchstartY = event.changedTouches[0].screenY;
        touchstartX = event.changedTouches[0].screenX;
      },
      false
    );

    this.$refs.pcard.addEventListener(
      "touchend",
      function (event) {
        touchendY = event.changedTouches[0].screenY;
        touchendX = event.changedTouches[0].screenX;
        handleSwipe();
      },
      false
    );

    const handleSwipe = () => {
      const xDiff = Math.abs(touchstartX - touchendX);
      const yDiff = Math.abs(touchstartY - touchendY);

      if (xDiff > yDiff || yDiff < 20) return;

      if (touchendY > touchstartY) {
        // this.addToCart();
        this.animation = "magictime slideDown";
        this.toggleAnimation = true;
        setTimeout(() => {
          this.toggleAnimation = false;
        }, 500);
      }
      if (touchendY < touchstartY) {
        this.animation = "magictime slideUp";
        this.toggleAnimation = true;
        setTimeout(() => {
          this.toggleAnimation = false;
        }, 500);
      }

      this.addToCart();
    };
  },
});
</script>
<style scoped>
.magictime {
  -webkit-animation-duration: 100ms;
  animation-duration: 100ms;
}
</style>
