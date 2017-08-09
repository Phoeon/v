import Validator from '../../../widget/validator';

const validator = new Validator({});

const state = {
				tabs : [{
					to : "table",
					text :"表格",
					close : false
				},{
					to : "form",
					text :"表单"
				},{
					to : "action-bar",
					text :"随便"
				}],
				validator
			}

export default {
	state
}

