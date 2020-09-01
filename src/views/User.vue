<template>
  <div class="Echarts">
    <h2>我是用户界面</h2>
    <p>我是用户相关信息，我是NT</p>
    <h2>{{ username }}</h2>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      username() {
          return this.$route.params.userId
      }
    },
    methods: {
      myEcharts(){
		  // 基于准备好的dom，初始化echarts实例
		  var myChart = this.$echarts.init(document.getElementById('main'));

		  // 指定图表的配置项和数据
		  var option = {
			  title: {
          text: 'ECharts 入门示例',
          right: 'center'
			  },
			  tooltip: {},
			  legend: {
				  data:['销量']
			  },
			  xAxis: {
				  data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			  },
			  yAxis: {},
			  series: [{
				  name: '销量',
				  type: 'bar',
				  data: [5, 20, 36, 10, 10, 20]
			  }]
		  };

		  // 使用刚指定的配置项和数据显示图表。
		  myChart.setOption(option);
		  }
    },
    mounted() {
  	this.myEcharts();
  }
  }

</script>

<style>
</style>