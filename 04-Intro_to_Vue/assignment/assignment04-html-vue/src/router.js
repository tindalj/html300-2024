// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import ImagesPage from './components/ImagesPage.vue'
import AccordionPage from './components/AccordionPage.vue'
import GridPage from './components/GridPage.vue'

const routes = [
  { path: '/', name: 'Home', component: LandingPage },
  { path: '/images', name: 'Images', component: ImagesPage },
  { path: '/accordion', name: 'Accordion', component: AccordionPage },
  { path: '/grid', name: 'Grid', component: GridPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
