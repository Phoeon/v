<template>
	<div class="ph-view-page">
		<slot></slot>
	</div>
</template>
<script>
	import {mapActions} from 'vuex';

	export default{
		mounted(){
			//页面pv统计
			this.fPv&&this.fPv({
				type : "pv",
				meta : {
					meta : this.$router.currentRoute.meta,
					path : this.$router.currentRoute.fullPath
				}
			});
		},
		methods : mapActions(['fPv'])
	}
</script>
<style lang="less">
	@import '../../less/macro';
	.ph-view-page{
		// .bgc(#fff);
		.pa;
		.t(55px);
		.l(15px);
		.r(15px);
		.b(15px);
		.of(auto);
		.bxs(border-box);
	}
</style>