<template>
  <div class="topNav">
    <div class="logo">logo</div>
    <div class="menu">
      <span class="menuItem">菜单1</span>
      <span class="menuItem">菜单2</span>
      <span class="menuItem">菜单3</span>
    </div>
    <span class="toggleAside"></span>
  </div>
</template>
<script>
export default {
  name: "topNav",
};
</script>
<style lang="scss" scoped>
.topNav {
  position: relative;
  z-index: 10;
  display: flex;
  height: 50px;

  @media (max-width: 500px) {
    .menu {
      display: none;
    }
    .logo {
      margin-right: auto;
    }
  }
}
</style>
