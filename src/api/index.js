import Axios from 'axios';

export const loadData = (path,cb)=>{
	Axios.get(path||"saas/AuthUserList?json=1")
	.then(cb);
}