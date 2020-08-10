<template>
  <div class="homePage">
    <topNav />
    <div class="main">查看文档</div>
    <router-link to="/doc">go!</router-link>
  </div>
</template>
<script>
import topNav from "../components/topNav.vue";

export default {
  name: "Home",
  components: {
    topNav
  }
};
</script>
<style lang="scss" scoped>
.homePage {
  .topNav {
    .logo {
      margin-right: auto;
    }
  }
}
</style>