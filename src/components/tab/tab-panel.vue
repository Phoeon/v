<template>
	<div class="ph-tab-panel">
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
<style lang="less" scoped>
	@import '../../less/macro';

	.ph-tab-panel{
		.bgc(#fff);
		.bd(1px solid #E6E6E6);
		.pt(1px);
		.mt(-1px);
		.pd(1px 15px 15px 15px);
	}
</style>