import { createApp } from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'
import {use} from "echarts/core"
import "echarts"
import './assets/main.css'
import {CanvasRenderer} from 'echarts/renderers'
import {BarChart} from 'echarts/charts'
import {GridComponent,TooltipComponent} from 'echarts/components'
use([
    CanvasRenderer,
    BarChart,
    GridComponent,
    TooltipComponent
]);

const app = createApp(App)
app.config.globalProperties.$echarts = echarts

app.mount('#app')

