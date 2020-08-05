import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import Button from "./components/button.vue";
import Home from "./views/Home.vue";
import Switch from "./components/switch.vue";
import Dialog from "./components/dialog.vue";
import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    { path: "/button", component: Button },
    { path: "/switch", component: Switch },
    { path: "/dialog", component: Dialog },
  ]
});

const app = createApp(App);
app.use(router);
app.mount("#app");
