<template>
	<Page>
		<TableCmp>
			<tr>
	            <th>UID</th>
	            <th>称谓</th>
	            <th>角色</th>
				<th>手机号</th>
				<th>状态</th>
				<th>备注</th>
	            <th>操作</th>
	        </tr>
	        <tr v-for="item in data.userList">
	            <td>{{item.id}}</td>
	            <td>{{item.monicker_name}}</td>
	            <td>{{item.role_name}}</td>
				<td>{{item.mobile}}</td>
				<td>{{item.status}}</td>
				<td>{{item.remark}}</td>
	            <td>操作</td>
	        </tr>
		</TableCmp>
	</Page>
</template>
<script>
	import {loadData} from '@/api/index.js';

	import Page from '@/components/business-page';
	import Tab from '@/components/tab/index.js';
	import TableCmp from '@/components/table';
	export default {
		name : "tab",
		mounted(){
			loadData(false,(res)=>{
				 this.data = res.data;
			});
		},
		data(){
			return {
				data : {
					userList : []
				}
			}
		},
		components : {Page,Tab,TableCmp}
	}
</script>
<style lang="less" scoped>
	@import '../../less/macro';
</style>