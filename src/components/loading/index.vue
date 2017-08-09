<template>
	<div class="mask" v-show="show">
		<transition 
		enter-active-class="animated bounceIn"
		leave-active-class="animated bounceOut"
		>
			<div v-show="show" class='loading'>
				<i class="fa fa-spinner fa-pulse"></i>
				<span>请稍候</span>
				<i class="fa fa-ellipsis-h"></i>
			</div>
		</transition>
	</div>
</template>
<script>
	export default {
		name : "SimpleLoading",
		props : ['show']
	}
</script>
<style lang="less" scoped="">
	@import '../../less/macro'; 
	.mask{
		.zi(9990);
		.pf;
		.l(0);
		.t(0);
		.w(100%);
		.h(100%);
		.bgc(rgba(0,0,0,0.5));
		.zi(999);
		.loading{
			.fa-spinner{
	    		.fs(25px);
	    		.va(middle);
	    		.mr(5px);
			}
			.fa-ellipsis-h{
				.fs(12px);
				.fc(#777);
			}
			.pa;
			.w(190px);
			.h(60px);
			.lh(60px);
			.fs(14px);
			.fc(#333);
			.bgc(#fff);
			.l(0);
			.r(0);
			.t(30%);
			.mg(auto);
			.ta(center);
			.brs(8px);
		}
	}
</style>