<template>
	<form action="" class="ph-form">
		<slot
			:onAction="onAction"
			:onFieldChange="onFieldChange"
		></slot>		
	</form>
</template>
<script>
	export default {
		props : ['payload','validator'],
		methods : {
			onAction(a){
				let fm = this.payload;
				let ks = Object.keys(fm);
				let valid = true;
				ks.forEach((key)=>{
					let {validType,value} = fm[key];
					let res=this.validator.doValid(validType,value);
					let f=fm[key];
					f.valid = res.valid;
					f.tip = res.tip;
					valid=res.valid?valid:false;
				});
				this.$emit("onFormAction",{
					valid : valid
				})
			},
			onFieldChange(field){
				var f = this.payload[field.name];
				let res = this.validator.doValid(f.validType,field.value);
				f.valid = res.valid;
				f.tip = res.tip;
				f.value = field.value;
			}
		}
	}
</script>
<style lang="less" scoped="">
	@import '../../less/macro';

	.ph-form{
		.mg(15px 0);
	}
</style>