import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import 'bootstrap3/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

Vue.config.productionTip = false
router.beforeEach((to,from,next) => {
  if (to.matched.some(record => record.meta.Auth)) {
    //requires auth check if logged in
    if(!store.getters.loggedIn){
      next({
        path: '/login',
        //query: { redirect: to.fullPath }
      })
    }else{
      next()
    }
  } else if (to.matched.some(record => record.meta.Visitor)) {
    //requires auth check if logged in
      if(store.getters.loggedIn){
        next({
          path: '/customers',
          //query: { redirect: to.fullPath }
        })
      }else{
        next()
      }
    }else{
        next()
    }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
