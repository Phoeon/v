<template>
	<section class="ph-tabs-wrapper">
		<ul class="ph-tab-list">
			<TabItem 
			v-for="(item,k) in tabs" 
			:to="item.to"
			:close="item.close"
			:idx="k"
			:key="k"
			@notifyTabRemove="onNotifyTabRemove"
			>{{item.text}}</TabItem>
		</ul>
		<router-view></router-view>
	</section>
</template>
<script>
	import TabItem from './tab-item';
	export default{
		props : {
			tabs : {
				default : [{
					to : "",
					close : false,
					idx : -1,
					text : "Tab Test"
				}]
			}
		},
		methods : {
			onNotifyTabRemove(idx){
				this.tabs.splice(idx,1);
				let to = (this.tabs[idx]||this.tabs[idx-1]).to;
				this.$router.replace({path:to});
			}
		},
		components:{TabItem}
	}
</script>
<style lang="less">
	@import '../../less/macro';

	.ph-tabs-wrapper{
		.pr;
		.fs(14px);
		.ph-tab-list{
			.pr;
			.oh;
			li{
				.fl;
				.h(32px);
				.lh(32px);
				.ml(-1px);
				.pr;
				.bd(1px solid #E6E6E6);
				.bgc(#f2f2f2);
				.brs(3px 3px 0 0);
				.cur(pointer);
				&.ph-tab-item-close{
					a{
						.pdr(20px);
					}
				}
				a{
					.pd(0 10px);
					.ta(center);
					.miw(50px);
					.td(none);
					.fc(inherit);
					.db;
					&.active{
						.bgc(#FFFFFF);
						.pb(1px);
					}
				}
				
				&:first-child{
					.ml(0px);
				}
				.fa-close{
					.pa;
					.t(0);
					.b(0);
					.r(0);
					.mg(auto);
					.lh(32px);
					.pd(0 5px);
					.zi(1);
					.fs(12px);
					visibility: hidden;
				}
				&:hover{
					.fa-close {
						visibility: visible;
					    &:hover{
					    	.fc(#000);
					    }
					}
				}
		}
	}
}
</style>