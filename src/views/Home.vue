<template>
<div class="homePage">
  <topNav />
  <div class="main">内容</div>
  </div>
</template>
<script>
import topNav from '../components/topNav.vue'
export default {
  name: "Home",
  components:{
     topNav 
  }
};
</script>
<style lang="scss" scoped>
        .homePage{
            .logo{
                margin-right: auto
            }
           
        } 
</style>