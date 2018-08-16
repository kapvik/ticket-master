require('./bootstrap')
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'
import VueMoment from 'vue-moment'
import { routes } from './routes'
import MainApp from './components/MainApp'
import { StoreData } from './store'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VeeValidate)
Vue.use(VueMoment)

const store = new Vuex.Store(StoreData)

const router = new VueRouter({
	routes,
	mode: 'history'
})

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
    	MainApp
    }
})
