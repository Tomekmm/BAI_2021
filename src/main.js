import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import VueGoodTablePlugin from 'vue-good-table';

// import the styles 
import 'vue-good-table/dist/vue-good-table.css'
createApp(App).use(VueGoodTablePlugin);




createApp(App).use(router).mount('#app')