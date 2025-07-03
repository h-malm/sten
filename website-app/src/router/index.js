import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HorrorView from '../views/HorrorView.vue'
import PageView from '../views/PageView.vue'
import AboutView from '../views/AboutView.vue'
import PhotosView from '../views/PhotosView.vue'
import PlantView from '../views/PlantView.vue'
import RecipesView from '../views/RecipesView.vue'
import StuffIMadeView from '../views/StuffIMadeView.vue'
import KoreanView from '../views/KoreanView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/pageview', name: 'Page', component: PageView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/horror', name: 'Horror', component: HorrorView },
  { path: '/photos', name: 'Photos', component: PhotosView },
  { path: '/plants', name: 'Plants', component: PlantView },
  { path: '/recipes', name: 'Recipes', component: RecipesView },
  { path: '/stuffimade', name: 'Stuff I have made', component: StuffIMadeView },
  { path: '/korean', name: 'Korean Practice', component: KoreanView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
