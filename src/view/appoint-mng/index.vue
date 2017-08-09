<template>
	<Page>
		<TableCmp>
			<tr>
	        <th>预约时间</th>
	        <th width="146px">客户姓名（新氧昵称）</th>
	        <th>联系方式</th>
	        <th>客户来源</th>
	        <th>类型</th>
	        <th>新氧订单</th>
	        <th>指定项目</th>
	        <th class="des">预约资源</th>
	                <th>备注</th>
	        <th>创建人</th>
	        <th>最后操作</th>
	        <th>状态</th>
	        <th>操作</th>
	      </tr>
	        <tr v-for="re in data.reservation_list" :k="re.rid">
        <td>{{re.arrival_time}}</td>
        <td>
            
            <a href="javascript:void(0)" class="cus_info detail-dialog">
                <span>{{re.name}}</span>
                <span>{{re.age}}岁</span>
            </a>
        </td>
        <td>{{re.mobile}}</td>
        <td>{{re.user_originate}}</td>
        <td>{{re.consume_type}}</td>
        <td>
            订单号：{{re.order_id}}
            {{re.title}}
        </td>
        <td>
            
        </td>
        <td>
            {{re.start_date}}--{{re.end_date}}<br />
           
            人员：{{re.person_name}}
            床位：{{re.room_name}}{{re.bed_name}}
        </td>
        <td>{{re.remark}}</td>
        <td>{{re.creator_first_time}}<br />{{re.creator_first}}</td>
        <td>{{re.creator_last_time}}<br />{{re.creator_last}}</td>
        <td>
            {{re.status}}
        </td>
        <td>
            操作
        </td>
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
			loadData('/saas/ReservationList?json=1',(res)=>{
				 this.data = res.data;
			});
		},
		data(){
			return {
				data : {
					reservation_list : []
				}
			}
		},
		components : {Page,Tab,TableCmp}
	}
</script>
<style lang="less" scoped>
	@import '../../less/macro';
</style>