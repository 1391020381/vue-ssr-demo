<template>
  <div class='foo'>
    <h1>Foo</h1>
    <p>ajax数据{{foo}} </p>
  </div>
</template>
<script>
  export default {
    asyncData ({store}) {
      return store.dispatch('fetchFoo')
    },
    data () {
      return {}
    },
    mounted () {
    },
    methods: {},
    computed: {
      foo () {
        return this.$store.state.foo
      }
    }
  }
</script>

<style scoped>
  .foo {
    background: yellow;
  }
</style>