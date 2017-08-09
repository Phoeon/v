<template>
	<div :class="['ph-action-bar', 'ph-bar-'+position,'ph-bfc']">
		<div class="ph-left">
			<slot></slot>
		</div>
		<div class="ph-right">
			<slot name="ph-action-right"></slot>
		</div>
	</div>
</template>
<script>
	export default{
		props : {
			position : {
				default : "top"
			}
		}
	}
</script>
<style lang="less" scoped="">
	@import '../../less/macro';
	.ph-action-bar{
		.bgc(#fff);
		.bd(1px solid #e7e7e7);
		.h(35px);
		.lh(35px);
		.ph-left{
			.pl(15px);
			.ph-btn{
				.mr(20px);
				.fs(14px);
			}
		}
		.ph-right{
			.pdr(15px);
			.ta(right);
			.ph-btn{
				.ml(20px);
				.fs(14px);
			}
		}
		&.ph-bar-bottom{
			.bt(none);
			.bs(0 -1px 3px 0 #D3DBEC);
		}
		&.ph-bar-top{
			.bb(none);
			.bs(0 1px 3px 0 #D3DBEC);
		}
	}
</style>