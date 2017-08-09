<template>
	<a :class='cla' @click="notifyAction">
		<i :class='["fa","fa-"+icon]'></i>
		<span><slot>{{text}}</slot></span>
	</a>
</template>
<script>
	import {mapActions} from 'vuex';

	export default{
		props : {
			type : {
				default : "func" //link
			},
			text : {
				default : "格式导出"
			},
			icon : {
				default : "download"
			},
			action : {
				default : "default-action"
			},
			disabled : {
				default : false
			}
		},
		data(){
			return {
				dbclick:false
			}
		},
		computed : {
			cla(){
				var c = {
					'ph-btn' : true,
					'ph-btn-disabled' : this.disabled
				}
				c['ph-btn'+this.type] = true;
				return c;
			}
		},
		methods : {
			notifyAction(){
				//判断按钮的状态
				if(!this.disabled&&!this.dbclick){
					//用于未来的统计业务
					this.fKeyClick&&this.fKeyClick({
						type : "click",
						meta : {
							text : this.text,
							action : this.action,
							path : this.$router.currentRoute.fullPath
						}
					});

					this.dbclick = true;
					//500 s 后，自动打开禁用的按钮标记
					setTimeout(i=>{
						this.dbclick = false;
					},500);
					this.$emit("btnAction",this.action);
				}
			},
			...mapActions(['fKeyClick'])
		}
	}
</script>
<style lang="less" scoped="">
	@import '../../less/macro';
	.ph-btn{
		.cur(pointer);
		&:hover{
			.bgc(#f3f3f3);
		}
		&.ph-btn-disabled{
			.cur(not-allowed);
			.opa(0.7);
			.bgc(#f3f3f3);
		}
	}
</style>