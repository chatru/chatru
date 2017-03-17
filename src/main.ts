import Vue from 'vue'
import 'font-awesome/scss/font-awesome.scss'
import App from './components/App.vue'
import './main.scss'

import { store } from './store'

// mount
new Vue({
    el: '#chatरु',
    render: h => h(App),
    store
})