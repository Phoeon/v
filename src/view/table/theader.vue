<template>
	<Page>
		<TableCmp>
				<ActionBar slot="table-header">
					基本表格+表头
				</ActionBar>
				<tr>
					<th>1</th>
					<th>2</th>
					<th>3</th>
					<th>4</th>
					<th>5</th>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
		</TableCmp>
		<br>
		<TableCmp>
			<ActionBar slot="table-header">
				<Btn text="下载" @btnAction="onClick"></Btn>
				<Btn text="新增" icon="plus" @btnAction="onClick" action="new plus"></Btn>
				<Btn text="修改" icon="edit" @btnAction="onClick" action="editing"></Btn>
			</ActionBar>
				<tr>
					<th>1</th>
					<th>2</th>
					<th>3</th>
					<th>4</th>
					<th>5</th>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
		</TableCmp>
		<br>
		<TableCmp>
			<ActionBar slot="table-header">
				<Btn text="下载" @btnAction="onClick"></Btn>
				<Btn text="修改" icon="edit" @btnAction="onClick" action="editing"></Btn>
				<Btn slot="ph-action-right" @btnAction="onClick" icon="spinner" action="spinner"></Btn>
				<Btn slot="ph-action-right" :disabled="true"></Btn>
			</ActionBar>
				<tr>
					<th>1</th>
					<th>2</th>
					<th>3</th>
					<th>4</th>
					<th>5</th>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
		</TableCmp>
		<br>
		<TableCmp>
			<ActionBar slot="table-header">
				<Btn text="下载" @btnAction="onClick"></Btn>
				<Btn text="修改" icon="edit" @btnAction="onClick" action="editing"></Btn>
				<Btn slot="ph-action-right" @btnAction="onClick" icon="spinner" action="spinner"></Btn>
				<Btn slot="ph-action-right" :disabled="true"></Btn>
			</ActionBar>
				<tr>
					<th>1</th>
					<th>2</th>
					<th>3</th>
					<th>4</th>
					<th>5</th>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
				<ActionBar slot="table-footer" position="bottom">
					<Btn text="下载"></Btn>
					<Btn text="新增" icon="plus"></Btn>
					<Btn text="修改" icon="edit"></Btn>
					<Btn slot="ph-action-right"></Btn>
					<Btn slot="ph-action-right" @btnAction="onClick" icon="spinner" action="spinner"></Btn>
					<Btn slot="ph-action-right" :disabled="true"></Btn>
				</ActionBar>
		</TableCmp>
	</Page>
</template>
<script>
	import Page from '@/components/business-page';
	import Btn from '@/components/btn';
	import ActionBar from '@/components/action-bar';
	import TableCmp from '@/components/table';
	export default {
		components : {Page,Btn,ActionBar,TableCmp},
		methods : {
			onClick(){
				console.log(arguments);
			}
		}
	}
</script>
