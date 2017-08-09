<template>
	<Page>
		<div class="wrap">
			<Btn @btnAction="onClick" icon="spinner" action="spinner" text="showloading"></Btn>
		</div>
	</Page>
</template>
<script>
	import {mapActions} from 'vuex';
	import Page from '@/components/business-page';
	import Btn from '@/components/btn';
	export default{
		methods : {
			onClick(){
				console.log(Math.random())
				this.fLoadToggle({show:true});	
				setTimeout(i=>{
					this.fLoadToggle({show:false});	
				},3000)
			},
			...mapActions(["fLoadToggle"])
		},
		components:{Page,Btn}
	}
</script>
<style lang="less" scoped="">
	@import '../../less/macro';

	.wrap{
		.pd(10px);
		.bgc(#fff);
	}
</style>