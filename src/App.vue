<template>
	<router-view></router-view>
</template>

<script>
import 'lib/font-awesome/css/font-awesome.min.css';
import 'lib/swiper/dist/css/swiper.min.css';
import '@/less/base.less';
export default {
  name: 'app',
  data(){
		return {
		}
  },
  watch : {
  	'$route' (to, from) {
    }
  }
}
</script>

<style>
</style>
