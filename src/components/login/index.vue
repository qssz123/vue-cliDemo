<template>
<div>
  <el-button type="primary" @click="echar">主要按钮</el-button>
  <el-button type="text">文字按钮</el-button>
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
    echar () {
      this.$router.push({path: 'echar'})
    }
  },
  beforeCreate () {
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
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
