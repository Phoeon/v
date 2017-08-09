<template>
	<div :class="['swiper-container', 'ph-menu-sp-c',toggle]">
		<div class="swiper-wrapper">
			<ul :class='{"swiper-slide":true,"ph-tree":true,"tree-open":true,"tree-close":!true}'>
				<TreeNode 
				@notifySwiperUpdate="onNotifySwiperUpdate"
				@treeNodeToggle="onTreeNodeToggle"
				:node="item"
				:idx="k"
				:overflow="overflow"
				:collapse="menuCollapse"
				 v-for="(item,k) in data.children"></TreeNode>
			</ul>
		</div>
		<!-- <div class="swiper-scrollbar ph-menu-sb"></div> -->
	</div>
</template>
<script>
	import mockjs from 'mockjs';
	import TreeNode from '@/components/tree';
	import Swiper from 'swiper';
	import menuData from './data.js';
	export default {
		name : "Menu",
		props : ['menuCollapse',"random"],
		computed : {
			toggle(){
				return this.menuCollapse?"ph-collapse":"";
			}
		},
		watch : {
			random(){
				this.updateSwiper();
			}
		},
		data(){
			return {
				overflow : false,
				data : {
					open : true,
					children : menuData
				}
			}
		},
		updated(){
			this.updateSwiper();
		},
		mounted(){
			this.sp=new Swiper('.ph-menu-sp-c', {
				// scrollbar : '.ph-menu-sb',
				direction: 'vertical',
                slidesPerView: 'auto',
                mousewheelControl: true,
                freeMode: true,
                roundLengths : true,
                scrollbarHide: false,
                scrollbarDraggable : true
            });
		},
		methods : {
			onTreeNodeToggle(idx){
				this.data.children = this.data.children.map((n,i)=>{
					n.open=i==idx?(!n.open):false;
					return n;
				})
			},
			updateSwiper(){
				setTimeout(i=>{
					let sp = this.sp;
					sp&&sp.update(true);
				},100);
			},
			onNotifySwiperUpdate(payload){
				//计算左边菜单的位移
				

				let sp = this.sp;
				
				sp&&sp.update(true);

				if(payload.translate<0)return;

				let translate = sp.translate - payload.translate;
				let hSpan = (payload.idx+1)*42+payload.translate+sp.translate;

				hSpan = sp.container.height()-hSpan;
				if(hSpan>0){
					this.overflow = false;
					return;
				}
				//左边收起来才执行
				if(this.menuCollapse){
					this.overflow = true;
				}else{
					setTimeout(i=>{
						sp.setWrapperTransition(300);
						sp.setWrapperTranslate(sp.translate+hSpan);
					},30);
				}
			}
		},
		components : {TreeNode}
	}
</script>
<style lang="less">
	@import '../../../less/macro';
	.ph-menu-sp-c{
		.pa;
		.w(100%);
		.t(98px);
		.l(0);
		.b(0);
		.ts(top 0.5s ease-in-out);
		.of(visible);
		.swiper-wrapper{
			.h(auto);
		}
		.ph-tree{
			.h(auto);
		}
		&.ph-collapse{
			.t(48px);
			.ph-tree{
				&.ph-sub-tree{
					.pa;
					.ts(opacity 0s ease-in-out);
				}	
				.ph-tree-item{
					.ph-item-link{
						.ws;
						label,
						.ph-fa-angle{
							.dn;
						}
					}
					
					&:hover{
						.zi(999);
						.bgc(#2A3846);
						.w(214px);
						label{
							.ml(48px);
							.dib;
						}

						.ph-sub-tree{
							.l(48px);
							.w(166px);
							label{
								.ml(-40px);
								.l(39px);
							}
						}
					}
				}	
			}
		}
	}
	.ph-tree{
		.bgc(#2F4050);
		.fs(14px);
		&.ph-sub-tree{
			.bgc(#2A3846);
			.oh;
			.h(0px);
			.db;
			.ts(height .3s ease-in-out);
			.ph-tree-item{
				.ph-item-link{
					.ti(40px);
					label{
						.l(0);
					}
				}
			}
		}
		.ph-tree-item{
			.pr;
			.lh(42px);
			.mih(42px);
			.ph-item-link{
				.db;
				.h(42px);
				.fc(#A7B1C2);
				.fs(14px);
				.td(none);
				white-space:nowrap;
				.fa{
					.ml(16px);
					.mr(6px);
				}
				.ph-fa-angle{
					.pa;
					.t(0);
					.b(0);
					.lh(42px);
					.mg(auto);
					//.r(15px);
					.l(146px);
				}
				label{
    				.t(0);
    				.b(0);
    				.l(39px);
    				.mg(auto);
    				.pa;
				}
				&.open,
				&.active,
				&:hover{
					.fc(#fff);
				}
			}
		}
	}
</style>