<template>
  <div>
    <h1>App.vue</h1>
    <p>vue with vue </p>
    <hr>
    <foo ref="foo_ref"></foo>
    <bar1 ref="bar_ref"></bar1>
    <bar2 ref="bar_ref2"></bar2>
  </div>
</template>
<script>
  import Foo from './components/Foo.vue';
  import Bar from './components/Bar.vue';

  export default {
    components: {
      foo: Foo,
      bar1: Bar,
      bar2: Bar
    },
    data () {
      return {}
    },
    beforeCreate () {
      console.log('App beforeCreate');
    },
    beforeMount () {
      console.log('App beforeMount');
    },
    mounted () {
      console.log('App mounted');
    },
    methods: {},
    computed: {}
  }
</script>

<style scoped>
  h1 {
    color: red
  }
</style>