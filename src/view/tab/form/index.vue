<template>
	<TabPanel>
		<FormCmp
			:validator="validator"
			:payload="formData"
			@onFormAction="onFormAction"
		>
			<template scope="props">
				<FormField 
				:name="account.name"
				:label="account.label"
				:value="account.value"
				:valid="account.valid"
				:tip="account.tip"
				@onFieldChange="props.onFieldChange"
				></FormField>
				<FormField 
				:name="mobile.name"
				:label="mobile.label"
				:value="mobile.value"
				:valid="mobile.valid"
				:tip="mobile.tip"
				@onFieldChange="props.onFieldChange"
				></FormField>
				<Btn icon="send" action="submit-form" @btnAction="props.onAction">提交</Btn>
			</template>
		</FormCmp>
	</TabPanel>
</template>
<script>
	import {mapState} from 'vuex';
	import {TabPanel} from '@/components/tab/index.js';
	import FormCmp , {FormField} from '@/components/form/index.js';
	import Btn from '@/components/btn';
	export default {
		data(){
			return {
				formData : {
					account : {
						name : "account",
						label : "account",
						value : "phoeon",
						validType : ["required","email"],
						tip : "",
						valid : true
					},
					mobile : {
						name : "mobile",
						label : "mobile",
						value : "",
						validType : ["required","mobile"],
						tip : "",
						valid : true
					}
				}
			}
		},
		computed : {
			account(){
				return this.formData.account;
			},
			mobile(){
				return this.formData.mobile;
			},
			...mapState({
				validator : (state)=>state.tab.validator
			})
		},
		methods : {
			onFormAction(a){
				console.log(a);
			}
		},
		components : {TabPanel,FormCmp,FormField,Btn}
	}
</script>
<style lang="less">
	@import '../../../less/macro';

	
</style>