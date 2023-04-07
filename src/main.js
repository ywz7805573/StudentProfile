import { createApp } from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {use} from "echarts/core"
import "echarts"
import './assets/main.css'
import {CanvasRenderer} from 'echarts/renderers'
import {BarChart} from 'echarts/charts'
import {GridComponent,TooltipComponent} from 'echarts/components'
import {
    components,
    plugins
} from './utils/elementPlus.js'

const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
})

plugins.forEach(plugin => {
    app.use(plugin)
})
use([
    CanvasRenderer,
    BarChart,
    GridComponent,
    TooltipComponent,
    
]);


app.config.globalProperties.$echarts = echarts

app.mount('#app')

