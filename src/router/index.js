import Vue from 'vue'
import Router from 'vue-router'

const Frame =     (resolve)=>require(['@/view/frame'],resolve);
const Dashboard = (resolve)=>require(['@/view/dashboard'],resolve);

const Tab =       (resolve)=>require(['@/view/tab'],resolve);
const TableCmp =  (resolve)=>require(['@/view/tab/table'],resolve);
const FormCmp =   (resolve)=>require(['@/view/tab/form'],resolve);
const ActionBar = (resolve)=>require(['@/view/tab/action-bar'],resolve);

const Login =     (resolve)=>require(['@/view/auth/login'],resolve);
const NotFound =  (resolve)=>require(['@/view/not-found'],resolve);

const Authority = (resolve)=>require(['@/view/auth-mng'],resolve);
const Reservation = (resolve)=>require(['@/view/appoint-mng'],resolve);

const SimpleTable = (resolve)=>require(['@/view/table'],resolve);
const ActionTable = (resolve)=>require(['@/view/table/theader'],resolve);
const Loading = (resolve)=>require(['@/view/loading'],resolve);

Vue.use(Router);

const syncRoutes = [{
      path : "/",
      redirect : "/login"
    },{
      path : "/login",
      component : Login
    },
    {
      path : "/404",
      component : NotFound
    }];
const asyncRoutes = [
    {
      path: '/',
      component: Frame,
      children : [{
        path:"/",
        redirect:"/dashboard"
      },{
        path: '/dashboard',
        component: Dashboard
      },{
        path : '/saas/AuthUserList',
        component : Authority
      },{
        path : '/saas/ReservationList',
        component : Reservation
      },{
        path : '/table',
        component : SimpleTable
      },{
        path : '/table-action',
        component : ActionTable
      },{
        path : '/loading',
        component : Loading
      },{
        path: '/tab',
        component: Tab,
        children : [{
          path:"",
          redirect : "table"
        },{
          path : "table",
          component : TableCmp
        },{
          path : "form",
          component : FormCmp
        },{
          path : "action-bar",
          component : ActionBar
        }]
      }]
    }
    ,{
      path : "*",
      redirect : "404"
    }
]

const router = new Router({
  routes: syncRoutes,
  linkActiveClass : "active"
})

//solve addRoutes refresh problem
let hasLoadRoutes = false;
if(localStorage.getItem("permission")){
  if(!hasLoadRoutes){
            router.addRoutes(asyncRoutes);
            hasLoadRoutes = true;
          }
}
//solve addRoutes refresh problem
router.beforeEach((to,from,next)=>{
  if(to.path=='/login'){
    if(localStorage.getItem("permission")){
        if(!hasLoadRoutes){
          router.addRoutes(asyncRoutes);
          hasLoadRoutes = true;
        }
        next({
          path:'/tab',
          query:{
       
          }
        })
    }else{
      next();
    }
  }else {
      if(localStorage.getItem("permission")){
        if(!hasLoadRoutes){
          router.addRoutes(asyncRoutes);
          hasLoadRoutes = true;
        }
        next();
      }else{
        next({
          path : "/login",
          query : {
            returnUrl : from.path
          }
        });
      }  
  }
})


export default router;
