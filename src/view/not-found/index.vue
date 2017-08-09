<template>
	<section class="ph-blank">
		<img src="../../assets/not-found.png" alt="">
		<h1>after {{time}} seconds , go back to index</h1>
	</section>
</template>
<script>
	export default{
		data(){
			return {
				time : 5
			}
		},
		mounted(){
			let timer = setInterval(i=>{
				this.time--;
				if(this.time==0){
					clearInterval(timer);
					this.$router.replace({path:"/"});
				}
			},1000)
		}
	}
</script>
<style lang="less" scoped>
	@import '../../less/macro';
	.ph-blank{
		.ta(center);
		img{
			.mt(100px);
		}
	}
</style>