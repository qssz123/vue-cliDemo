<template>
<div>
</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Hello Vue.js'
    }
  },
  component: {
    // someComponent
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  beforeCreate () {
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
    console.log(this.$router.options.routes)
  },
  beforeUpdate () {
  },
  updated () {
  },
  activated () {
  },
  deactivated () {
  },
  beforeDestroy () {
  },
  destroyed () {
  }
}
</script>

<style scoped>

</style>
