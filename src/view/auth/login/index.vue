<template>
	<section class="ph-blank">
		<h1>登录页面</h1>
		<button @click="login">登录</button>
	</section>
</template>
<script>
	export default{
		mounted(){
			
		},
		methods : {
			login(){
				localStorage.setItem("permission",true);
				let ru = this.$route.query.returnUrl||"/dashboard";
				if(ru){
					this.$router.push({
						path : ru
					})
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '../../../less/macro';
	.ph-blank{
		.ta(center);
	}
</style>