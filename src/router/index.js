import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/views/hello'
import Dashboard from '@/components/views/dashboard'

// chart list
import ChartLayout from '@/components/views/chart/_layout'
import ChartLine from '@/components/views/chart/line'
import ChartBar from '@/components/views/chart/bar'
import ChartRadar from '@/components/views/chart/radar'
import ChartPolar from '@/components/views/chart/polar'
import ChartPie from '@/components/views/chart/pie'
import ChartDoughnut from '@/components/views/chart/doughnut'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/hello' },
    { path: '/hello', component: Hello },
    { path: '/dashboard', component: Dashboard },

    { path: '/chart',
      component: ChartLayout,
      children: [
        { path: '/', redirect: 'line' },
        { path: 'line', component: ChartLine },
        { path: 'bar', component: ChartBar },
        { path: 'radar', component: ChartRadar },
        { path: 'polar', component: ChartPolar },
        { path: 'pie', component: ChartPie },
        { path: 'doughnut', component: ChartDoughnut }
      ]
    }
  ]
})
