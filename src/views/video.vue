<template>
  <vueMiniPlayer ref="vueMiniPlayer" :video="video" :mutex="true" @fullscreen="handleFullscreen" @videoPlay="handlePlay" />
</template>
<script>
  export default {
    data () {
      return {
        video: {
            url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
            //url: '../assets/20200424_154849.mp4',
            //cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
            muted: false,
            loop: false,
            preload: 'auto',
            poster: '',
            volume: 1,
            autoplay: false
        }
      }
    },
    computed: {
      $video() {
        return this.$refs.vueMiniPlayer.$video;
      }
    },
    methods:{
      handleFullscreen() {
        console.log("全屏事件")
      },
      handlePlay() {
        console.log("播放/暂停")
      }
    },
    destroyed() {
      console.log("实例被销毁了")
    }
  }
</script>