import Button from "../components/button";
import { createApp } from "vue";

const routes = [
  {
    path: "/button",
    component: Button
  }
];

const router = new VueRouter({
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
