import Vuex from 'vuex'
import Vue from 'vue'
import users from './modules/users'
import customers from './modules/customers'

//load vuex
Vue.use(Vuex)
//create store
export default new Vuex.Store({
    modules:{
      users,
      customers
    }
})
