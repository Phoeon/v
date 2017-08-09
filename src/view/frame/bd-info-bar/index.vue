<template>
	<section class="ph-bd-info ph-bfc" >
    	<div class="ph-left ph-biscuit">
    		<i class="fa fa-home"></i>
			<label v-for='nav in navs'>{{nav}} /</label>
    	</div>
    	<div class="ph-right ph-bd-info-right">
    		负责客户经理：迷死氧   电话：18888888888  官方投诉邮箱:sy_tousu@soyoung.com
    	</div>
    </section>
</template>
<script>
	export default{
		data(){
			return {
				navs : ['工作台','私信管理','快捷回复']
			}
		}
	}
</script>
<style lang="less" scoped="">
	@import '../../../less/macro';
	.ph-bd-info{
		.bgc(#fff);
		.h(40px);
		.lh(40px);
		.fs(12px);

		.fa-home{
			.fc(#59BBC4);
			.fs(18px);
			.va(text-bottom);
		}
		label{
			.mr(5px);
		}
		.ph-biscuit{
			.pl(30px);
		}
		.ph-bd-info-right{
			.ta(right);
			.pdr(30px);
		}
	}
</style>