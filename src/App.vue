<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Athena" />
  <router-link to="/button">go button</router-link>
  <router-link to="/dialog">go dialog </router-link>
  <router-link to="/switch">go switch</router-link>
 <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
