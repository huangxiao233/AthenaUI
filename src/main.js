import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import Button from "./components/button.vue";
import Switch from "./components/switch.vue";
import Dialog from "./components/dialog.vue";
import HelloWorld from "./components/HelloWorld.vue";
import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/helloWorld", component: HelloWorld },
    { path: "/button", component: Button },
    { path: "/switch", component: Switch },
    { path: "/dialog", component: Dialog },
  ]
});

const app = createApp(App);
app.use(router);
app.mount("#app");
