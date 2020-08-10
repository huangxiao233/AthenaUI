<template>
 <NavTop />
  <aside>
    <div>button</div>
    <div>dialog</div>
    <div>switch</div>
  </aside>
  <main>内容</main>
</template>
<script>
import NavTop from "../components/topNav.vue";
export default {
  name: "doc",
  components: {
    NavTop
  }
};
</script>
