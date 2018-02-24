<template>
  <div class='bar'>
    <h1>Bar</h1>
    <p>ajax数据:{{bar}} </p>
  </div>
</template>
<script>
  export default {
    asyncData ({store}) {
      return store.dispatch('fetchBar')
    },
    data () {
      return {}
    },
    mounted () {
    },
    methods: {},
    computed: {
      bar () {
        return this.$store.state.bar
      }
    }
  }
</script>

<style scoped>
  .bar {
    background: blue;
  }
</style>