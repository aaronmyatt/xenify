import { createApp } from "vue";
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from "./App.vue";
import "./index.css";

import { createRouter, createWebHistory } from "vue-router";
import routes from "vite-plugin-pages/client";

const injectProducts = (): void => {
  // stole some Nicolas Cage quotes from here ( ͡❛ ‿‿ ͡❛)
  const products = {
    data: [
        {
          name: "Poster 1",
          description:
            "I am not a demon. I am a lizard, a shark, a heat-seeking panther. I want to be Bob Denver on acid playing the accordion.",
          squareImage: "https://www.placecage.com/401/400",
          verticalImage: "https://www.placecage.com/401/600",
          price: 5
        },
        {
          name: "Poster 2",
          description:
            "Those who have the ability to take action have the responsibility to take action.",
          squareImage: "https://www.placecage.com/402/400",
          verticalImage: "https://www.placecage.com/402/600",
          price: 5
        },
        {
          name: "Poster 3",
          description:
            "Some things are true whether you believe in them or not.",
          squareImage: "https://www.placecage.com/403/400",
          verticalImage: "https://www.placecage.com/403/600",
          price: 5
        },
        {
          name: "Poster 4",
          description:
            "I like both Blu-ray and DVD, but Blu-ray gives you more options.",
          squareImage: "https://www.placecage.com/404/400",
          verticalImage: "https://www.placecage.com/404/600",
          price: 5
        },
        {
          name: "Poster 5",
          description:
            "To be a good actor you have to be something like a criminal, to be willing to break the rules to strive for something new.",
          squareImage: "https://www.placecage.com/405/400",
          verticalImage: "https://www.placecage.com/405/600",
          price: 5
        },
        {
          name: "Poster 6",
          description:
            "Passion is very important to me. If you stop enjoying things, you've got to look at it, because it can lead to all kinds of depressing scenarios.",
          squareImage: "https://www.placecage.com/406/400",
          verticalImage: "https://www.placecage.com/406/600",
          price: 5
        },
        {
          name: "Poster 7",
          description:
            "You can't make your choices based on what critics think. You have to make your choices based on what's honest for you.",
          squareImage: "https://www.placecage.com/407/400",
          verticalImage: "https://www.placecage.com/407/600",
          price: 5
        },
        {
          name: "Poster 8",
          description:
            "There's a fine line between the Method actor and the schizophrenic.",
          squareImage: "https://www.placecage.com/408/400",
          verticalImage: "https://www.placecage.com/408/600",
          price: 5
        },
        {
          name: "Poster 9",
          description:
            "Don't lose the best thing in your life just because you are not sure.",
          squareImage: "https://www.placecage.com/409/400",
          verticalImage: "https://www.placecage.com/409/600",
          price: 5
        },
        {
          name: "Poster 10",
          description:
            "I'm legally unable to ride motorcycles. It's a contract that I have with my life insurance, so whenever I get a chance to do a movie and ride a bike I go for it.",
          squareImage: "https://www.placecage.com/410/400",
          verticalImage: "https://www.placecage.com/410/600",
          price: 5
        },
      ],
  };

  if (window && window.localStorage) {
    window.localStorage.setItem("products", JSON.stringify(products));
  }
};

// @ts-ignore
const baseRoute = import.meta.env.PROD === true ? '/xenify/' : '/'
const router = createRouter({
  history: createWebHistory(baseRoute),
  routes,
});

const app = createApp(App);

injectProducts();
app.use(router);

app.mount("#app");