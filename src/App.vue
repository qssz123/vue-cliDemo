<template>
  <div id="app" style="width: 100%;height: 100%;">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      active-text-color="#ffd04b" style="left: 0px;width: 200px;display: inline-block;vertical-align: top;height: 100%;">
      <el-menu-item index="index" v-for="(item,index) in routeData" :key="index"><router-link :to="item.path">{{item.name}}</router-link></el-menu-item>
    </el-menu>
    <!--    <img src="./assets/logo.png">-->
    <router-view style="display: inline-block;width: calc(100% - 208px);"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Hello Vue.js',
      activeIndex: '1',
      activeIndex2: '1',
      routeData: this.$router.options.routes
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

<style>
  @import 'assets/index.css';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
