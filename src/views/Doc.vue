<template>
  <div class="Athena-doc">
    <NavTop />
    <aside>
      <div class="Athena-docItem">button</div>
      <div class="Athena-docItem">dialog</div>
      <div class="Athena-docItem">switch</div>
      <div class="Athena-docItem">switch</div>
      <div class="Athena-docItem">switch</div>
      <div class="Athena-docItem">switch</div>
      <div class="Athena-docItem">switch</div>
      <div class="Athena-docItem">switch</div>
      <div class="Athena-docItem">switch</div>
      <div class="Athena-docItem">switch</div>
      <div class="Athena-docItem">switch</div>
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
    flex: 1;
    overflow-y: scroll;
  }
}
</style>
