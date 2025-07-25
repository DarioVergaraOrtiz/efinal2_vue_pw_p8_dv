import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuardarDoctorView from '../views/GuardarDoctorView.vue'
import GuardarPacienteView from '../views/GuardarPacienteView.vue'
import AgendarCitaView from '../views/AgendarCitaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/doctor',
    name: 'doctor',
    component: GuardarDoctorView
  },
  {
    path: '/paciente',
    name: 'paciente',
    component: GuardarPacienteView
  },
   {
    path: '/agendar',
    name: 'agendar',
    component: AgendarCitaView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
