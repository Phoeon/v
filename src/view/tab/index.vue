<template>
	<Page>

		<Tab :tabs="tabs"></Tab>

	</Page>
</template>
<script>
	import Page from '@/components/business-page';
	import Tab from '@/components/tab/index.js';
	import {mapState} from 'vuex';

	export default {
		name : "tab",
		computed : mapState({
			tabs : (state)=>state.tab.tabs
		}),
		components : {Page,Tab}
	}
</script>
<style lang="less" scoped>
	@import '../../less/macro';
</style>