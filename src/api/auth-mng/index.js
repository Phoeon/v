import Axios from 'axios';

export const loadData = (cb)=>{
	Axios.get("saas/AuthUserList?json=1")
	.then(cb);
}