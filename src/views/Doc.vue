<template>
  <div class="Athena-doc">
    <NavTop />
    <aside>
      <h2 >组件列表</h2>
      <ol>
        <li>
          <router-link to="/SWITCH">switch组件</router-link>
        </li>
        <li>
          <router-link to="/SWITCH">button组件</router-link>
        </li>
        <li>
          <router-link to="/SWITCH">dialog组件</router-link>
        </li>
        <li>
          <router-link to="/SWITCH">tabs组件</router-link>
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
    NavTop,
  },
};
</script>
<style lang="scss">
.Athena-doc {
  // display: flex;
  // flex-direction: column;
  // overflow-y: hidden;
  // height: 100vh;
  aside {
    padding-top: 70px;
    background: lightblue;
    width: 150px;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    > h2 {
      margin-bottom: 4px;
    }
    > ol {
      > li {
        padding: 4px 0;
      }
    }
  }
  main {
    font-size: 30px;
    flex: 1;
    overflow-y: scroll;
    margin-left: 50px;
  }
}
</style>
