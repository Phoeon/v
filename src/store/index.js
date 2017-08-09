import Vue from 'vue';
import Vuex from 'vuex';
import modules from './module';
Vue.use(Vuex);
const FrameConst = {
	M_LOADING_TOGGLE : 'M_LOADING_TOGGLE',
	M_LINEEAR_LOADING: 'M_LINEEAR_LOADING',
	M_MENU_COLLAPSE: 'M_MENU_COLLAPSE'
}
export default new Vuex.Store({
	modules,
	state : {
		loadingShow : false,
		menuCollapse : false,
		linkarLoading : {
			left : "-100%",
			opacity : 1
		}
	},
	mutations : {
		[FrameConst.M_MENU_COLLAPSE]  : (state) =>{
			state.menuCollapse = !state.menuCollapse;
		},
		[FrameConst.M_LOADING_TOGGLE] : (state,{show})=>{
			state.loadingShow = show;
		},
		[FrameConst.M_LINEEAR_LOADING] : (state,linkarLoading)=>{
			state.linkarLoading = linkarLoading;
		}
	},
	actions : {
		fMenuCollapse({commit}){
			commit(FrameConst.M_MENU_COLLAPSE);
		},
		fLoadToggle({commit},payload){
			console.log(payload)
			commit(FrameConst.M_LOADING_TOGGLE,payload);
		},
		fLinearLoad({commit},payload){
			commit(FrameConst.M_LINEEAR_LOADING,payload);
		}
	}
});