<template>
  <div class="Echarts">
    <!-- <div id="myChart" style="width:700px;height:300px"></div> -->
    <div id="myChart"></div>
  </div>
</template>

<script>
import moment from "moment"

export default {
  name: 'Echarts',
  computed: {
    Option () {
      return {
        // 指定配置项和数据
        title: {
          text: '仿真结果'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Step End', 'Step End1']
        },
        grid: {
          x: 80,
          y: 60,
          x2: 80,
          y2: 60,
          backgroundColor: 'rgba(0,0,0,0)',
          borderWidth: 1,
          borderColor: '#ccc'
        },
        xAxis: {
          // type: 'value',
          // data: [1, 2, 3, 4, 5, 6, 7]
          type: 'time',
          interval: 3600
          // data: ['2019-11-1 08:00:20', '2019-11-1 08:00:21', '2019-11-1 08:00:22', '2019-11-1 08:00:23', '2019-11-1 08:00:24', '2019-11-1 08:00:25', '2019-11-1 08:00:26']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Step End',
            type: 'line',
            step: 'end',
            // data: []
            data: this.datas1,
            markPoint: {
              data: [{
                type: "max"
              }],
              symbol: "roundRect",
              symbolSize: "20"
            }
          }
        //   {
        //     name: 'Step End1',
        //     type: 'line',
        //     step: 'end',
        //     data: [450, 432, 401, 454, 590, 530, 510]
        //   }
        ]
      }
    }
  },
  data() {
    return {
      myChart: null,
      //1586573278.0, 1586573278.02, 1586573278.04, 1586573278.06, 1586573278.08, 1586573278.1
      // 1, 1, 1, 1, 1, 2
      simDatas: [
        { value: [1586573278.0, 1] },
        { value: [1586573278.02, 1] },
        { value: [1586573278.04, 1] },
      ],
      datas: [],
      datas1: [
        { value: ["1997-10-1 08:00:20", 684] },
        { value: ["1997-10-1 08:00:21", 500] },
        { value: ["1997-10-1 08:00:22", 800] }
      ]
    }
  },
  created() {
    this.zh()
    console.log('data1', this.datas1)
  },
  mounted() {
    this.$nextTick(() => {
      this.myEcharts()
    })
  },

  methods: {
    myEcharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption(this.Option)
      window.addEventListener('resize', function() {
        if (myChart) {
          myChart.resize()
        }
        // myChart.resize()
      })
    },
    zh() {
      var x = new Array
      for(var i=0; i<this.simDatas.length; i++) {
        let y = new Array
        let va = {
          value: [],
        }
        x[i] = this.formatTime(this.simDatas[i].value[0])
        // console.log('转化后的时间', i , x[i])
        // console.log('this.simDatas[', i ,'].value', this.simDatas[i])
        y[0] = x[i]
        y[1] = this.simDatas[i].value[1] 
        va.value = y
        // console.log('va:', va.value)
        this.datas.push(va)
        // console.log('data', i ,this.datas[i])
      }
      console.log('data',this.datas)
    },
    formatTime(time) {
      return moment.unix(time).format('YYYY/MM/DD HH:mm:ss:SS')
    }
  }
}
</script>

<style lang="scss" scoped>
#myChart {
  width: 700px;
  height: 320px;
}
</style>
