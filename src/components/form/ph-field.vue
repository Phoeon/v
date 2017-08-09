<template>
	<div class="ph-field-group ph-bfc">
		<div class="ph-label ph-left">
			{{label}}
		</div>
		<div class="ph-field-wrap ph-right">
			<div class="ph-field">
				<input 
					:class='{"ph-invalid-tip":!valid}'
					v-model="mv"
					@keyup="doValid">
				<i class="fa fa-angle-down"></i>
			</div>
			<label v-if="!valid" class="ph-tip ph-invalid-tip">{{tip}}</label>
		</div>
	</div>
</template>
<script>
	export default {
		props : {
			name : {
				default : ""
			},
			value : {
				default : ""
			},
			label : {
				default : ""
			},
			tip : {
				default : ""
			},
			valid : {
				default : true
			}
		},
		data(){
			return {
				mv : this.value
			}
		},
		methods : {
			doValid(){
				this.$emit("onFieldChange",{
					name : this.name,
					value : this.mv
				})
			}
		}
	}
</script>
<style lang="less" scoped="">
	@import '../../less/macro';
	.ph-field-group{
			.lh(26px);
			.fs(14px);
			.fc(#777);
			.pd(0 0 5px 0);
			.ph-label,
			.ph-field{
				
			}
			.ph-label{
				.w(60px);
				.pdr(5px);
			}
			.ph-field-wrap{
				.ph-field{
					.dib;
					.pr;
					.fa{
						.pa;
						.lh(24px);
						.t(2px);
						.b(1px);
						.r(1px);
						.mg(auto);
						.cur(pointer);
						.bgc(#FFF);
						.pdr(8px);
					}
				}
				input,
				select{
					.apper;
					.fc(#777);
					.miw(175px);
					.ti(8px);
					.va(middle);
					.bd(1px solid #e9e9e9);
					.o(none);
					.h(24px);
					.lh(24px);
					.mg(0);
					.pd(0);
					.bxs(content-box);
	    			&:focus{
	    				border-color: #60C6D0;
	    			}
				}
			}
		}
</style>