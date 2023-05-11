// 引入的是工厂函数 createApp
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
const app = createApp(App)
console.log(app)
app.mount('#app')