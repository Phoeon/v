<template>
	<div class="ph-linear-loading" :style="style"></div>
</template>
<script>
	export default{
		data(){
			return {
				left : -100,
				opacity : 1
			}
		},
		computed:{
			style() {
				return {
					left : this.left+"%",
					opacity : this.opacity		
				}
			}
		},
		mounted(){
			let timer=setInterval(()=>{
				this.left++;
				this.opacity-=0.005;
				if(this.left>=0){
					this.opacity=0;
					clearInterval(timer);
				}
			},20);
		}
	}
</script>
<style lang="less">
	@import '../../less/macro';

	.ph-linear-loading{
		.pf;
		.h(2px);
		.w(100%);
		.t(0);
		.l(-100%);
		.bgc(#0068C9);
		.zi(999);
	}
</style>