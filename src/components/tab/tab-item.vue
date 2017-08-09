<template>
	<li :class="{'ph-tab-item-close':close}">
		<router-link :to="to" active-class="active">
			<slot>Tab1</slot>
		</router-link>
		<i class="fa fa-close" v-if="close" @click="notifyClick"></i>
	</li>
</template>
<script>
	export default {
		props : {
			to : {
				default : ""
			},
			close : {
				default : false
			},
			idx : {
				default:-1
			}
		},
		methods : {
			notifyClick(){
				this.$emit("notifyTabRemove",this.idx);
			}
		}
	}
</script>