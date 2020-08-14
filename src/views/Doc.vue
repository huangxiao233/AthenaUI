<template>
  <div class="Athena-doc">
    <NavTop />
    <aside>
      <h2 >组件列表</h2>
      <ol>
        <li>
          <router-link to="/home">switch组件</router-link>
        </li>
        <li>
          <router-link to="/home">button组件</router-link>
        </li>
        <li>
          <router-link to="/home">dialog组件</router-link>
        </li>
        <li>
          <router-link to="/home">tabs组件</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <p>content</p>
      <p>content</p>
      <p>content</p>
      <p>content</p>
      <p>content</p>
      <p>content</p>
      <p>content</p>
    </main>
  </div>
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
<style lang="scss">
.Athena-doc {
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  height: 100vh;
  aside {
    background: red;
    overflow: scroll;
    position: fixed;
    left: 0px;
    top: 50px;
    height: 100px;
  }
  main {
    font-size: 30px;
    flex: 1;
    overflow-y: scroll;
    margin-left: 50px
  }
}
</style>
