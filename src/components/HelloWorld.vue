<template>
<h1>{{ msg }}</h1>


<p>这是雅典娜前端UI组件库</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
