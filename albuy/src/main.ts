import { createApp } from 'vue'
import { createMetaManager } from "vue-meta";

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const metaManager = createMetaManager();

createApp(App).use(store).use(router).use(metaManager).mount('#app')
