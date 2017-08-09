export default class Validator {
	constructor(configs){
		this.validators = {
			required : {
				valid(v){
					return !!v.trim();
				},
				tip :"不能为空"
			},
			regexp : {
				valid(v,a,b){
					var regexp = new RegExp(a);
					return regexp.test(v);
				},
				tip : "非法输入"
			},
			mobile : {
				valid(v){
					return (!v)||(/^1[3|4|5|7|8][0-9]\d{8}$/.test(v))
				},
				tip : "非法手机号"
			},
			email : {
				valid(v){
					return (!v)||(/^\w+@\w+\.\w+$/.test(v))
				},
				tip : "非法邮箱"
			},
			intnum : {
				valid(v){
					return (!v)||(/^\d+$/.test(v));
				} ,
				tip :""
			},
			numlg : {
	            valid(v,a){
	                    return Number(v) > Number(a);
	            },tip:""
		    },
		    numle : {
	            valid(v,a){
	                    return Number(v) >= Number(a);
	            },tip:""
		    },
		    number : {
	            valid(v){
	                    return !v||/^\d+$/.test(v);
	            },tip:""
		    },
		    maxlen : {
		        valid(v,a){
		            return !v||v.length<=Number(a);
		        },tip : ""
		    },
		    nrange : {
	            valid(v,a){
	                    return Number(v) >= Number(a[0]) && Number(v) <= Number(a[1]);
	            },tip:""
		    }
		};
		this.validators = Object.assign(this.validators,configs);
	}
	doValid(validators=[],input){
		//解析验证器
		return validators.reduce((a,b)=>{
			if(a.valid){
				let js = b.split(/\:/);
				let vn = js[0];
				let va = js.slice(1);
				let validator=this.validators[vn];
				if(!validator){
					throw new Error(`validator 【${vn}】 没有定义，请定义后在使用`);
				}
				let valid = validator.valid(input,...va);

				a.valid = valid;
				a.tip = valid?"":validator.tip;
			}
			return a;
		},{
			valid : true,
			tip : "",
			v : input
		});
	}
}