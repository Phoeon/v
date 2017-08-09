<template>
	<div class="ph-table-wrapper">
		<slot name="table-header"></slot>
		<table class="ph-table">
			<slot></slot>
		</table>
		<slot name="table-footer"></slot>
	</div>
</template>
<style lang="less" scoped="">
	@import '../../less/macro';

	.ph-table-wrapper{
		.mt(10px);
		.oh;
		.bgc(#fff);
		.ph-table{
			table-layout: fixed;
			border-collapse: collapse;
			.w(100%);
			.bd(#E7E7E7);
			.fs(12px);
			.fc(#333);
			.ls(0);
			.bd(1px solid #E7E7E7);
			th,td{
				.pd(9px 0);
			}
			th{
				.bgc(#F5F5F6);
				.bd(1px solid #E7E7E7);
			}
			td{
				.ta(center);
				.bd(1px dotted #e7e7e7);
			}
			tr:hover,
			tr:nth-of-type(2n+1){
				.bgc(#FAFDFD);
			}
		}
	}
	
</style>