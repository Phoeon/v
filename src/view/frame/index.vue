<template>
	<section class="ph-frame ph-bfc" id="ph-frame">
		<LinearLoading :linkarLoading="linkarLoading"></LinearLoading>
		<div :class='["ph-left","ph-frame-left",menuState]'>
			<Logo :menuCollapse="menuCollapse"></Logo>
			<Menus :menuCollapse="menuCollapse" :random="random"></Menus>
		</div>
		<div class="ph-right ph-frame-right">
			<BDInfoBar></BDInfoBar>
			<router-view></router-view>
		</div>
		<Loading :show="loadingShow"></Loading>
	</section>
</template>
<script>
	import Loading from '@/components/loading';
	import LinearLoading from '@/components/loading/linear-loading';
	import Logo from './logo';
	import BDInfoBar from './bd-info-bar';
	import Menus from './menu';
	import {mapState} from 'vuex';

	export default {
		data(){
			return {
				random : -1
			}
		},
		mounted(){
			let leftMenu = this.$el.querySelector(".ph-frame-left");
			if(leftMenu){
				["t","webkitT","mozT","msT"].forEach(i=>{
					leftMenu.addEventListener(i+"ransitionend",()=>{
						this.random = Math.random();
					});
				});
			}
		},
		computed : {...mapState(["loadingShow","linkarLoading","menuCollapse"]),
			menuState(){
				return this.menuCollapse?"ph-collapse":"";
			}
		},
		methods : {
			menuTransitionEnd(){
				console.log(Math.random(),22)
			}
		},
		name : "Frame",
		components : {Logo,BDInfoBar,Menus,Loading,LinearLoading}
	}
</script>
<style lang="less">
	@import '../../less/macro';
	.ph-frame{
		.h(100%);
	}
	.ph-left{
		.h(100%);
		.pr;
		.oh;
		&.ph-collapse{
			.of(visible);
		}
	}
	.ph-right{
		.h(100%);
	}	
	.ph-frame-left{
		.bgc(#243748);
		.w(166px);
		.ts(width 0.5s ease-in-out);
		&.ph-collapse{
			.w(48px);
		}
	}
	.ph-frame-right{
		.bgc(#f6f6f6);
		.pd(0 15px);
	}
</style>