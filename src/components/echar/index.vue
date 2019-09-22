<template>
  <div id="myChart" :style="{width: '100%', height: '100%'}"></div>
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
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.drawLine()
  },
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>

<style scoped>

</style>
