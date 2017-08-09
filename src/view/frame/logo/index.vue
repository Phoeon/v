<template>
	<div :class="['ph-logo',toggle]" >
		<template v-if="menuCollapse">
			<div class="ph-logo-collapse-btn"
				@click="fMenuCollapse">
				<i class="fa fa-bars"></i>
			</div>
		</template>
		<template v-else>
			<div class="ph-logo-pic">
				<img src="../../../assets/portrait.jpg">
			</div>
			<div class="ph-brand">无尽的，hrp</div>
			<div class="ph-logo-collapse"
			@click="fMenuCollapse">
				<i class="fa fa-angle-left"></i>
			</div>
		</template>
	</div>
</template>
<script>
	import {mapActions} from 'vuex';

	export default {
		props : ['menuCollapse'],
		computed : {
			toggle(){
				return this.menuCollapse?"ph-collapse":"";
			}
		},
		methods : mapActions(['fMenuCollapse']),
		name : "Logo"
	}
</script>

<style lang="less" scoped="">
	@import '../../../less/macro.less';

	.ph-logo{
		.pr;
		.zi(2);
		.bgc(#243748);
		
		.ph-logo-pic{
			.ta(center);
			.pt(12px);
			img{
				.dim(50px ,50px);
				.brs(50%);
			}
		}
		.ph-brand{
    		.h(30px);
    		.lh(30px);
    		.fs(12px);
    		.fc(#fff);
    		.ta(center);
		}
		.ph-logo-collapse-btn{
			.w(100%);
			.h(43px);
			.fc(#fff);
			.ta(center);
			.lh(43px);
			.fs(18px);
			.cur(pointer);
		}
		.ph-logo-collapse{
			.pa;
			.w(16px);
			.h(35px);
			.lh(35px);
			.t(0);
			.b(0);
			.r(0);
			.mg(auto);
			.bgc(#405971);
			.brs(3px 0 0 3px);
			.cur(pointer);
			.zi(1);
			.fc(#fff);
			.ta(center);
		}
	}
</style>