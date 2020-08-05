<template>
<div class="homePage">
  <div class="topNav">
    <div class="logo">logo</div>
    <div class="menu">
        <span class="menuItem">菜单1</span>
        <span class="menuItem">菜单2</span>
        <span class="menuItem">菜单3</span>
    </div>
  </div>
  <div class="main">内容</div>
  </div>
</template>
<script>
export default {
  name: "Home"
};
</script>
<style lang="scss" scoped>
        .homePage{
            .logo{
                margin-right: auto
            }
            .topNav{
                display: flex
            }
        } 
</style>