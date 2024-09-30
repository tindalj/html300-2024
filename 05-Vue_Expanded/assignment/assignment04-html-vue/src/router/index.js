import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import ImagesPage from '../components/ImagesPage.vue';
import AccordionPage from '../components/AccordionPage.vue';
import GridPage from '../components/GridPage.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/images', component: ImagesPage },
  { path: '/accordion', component: AccordionPage },
  { path: '/grid', component: GridPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;