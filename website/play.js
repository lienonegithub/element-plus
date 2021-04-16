import { createApp } from 'vue'
import Mtui from 'mtui'
import App from './play/index.vue'
import '../packages/theme-chalk/src/index.scss'

const app = createApp(App)
app.use(Mtui)
app.mount('#app')

