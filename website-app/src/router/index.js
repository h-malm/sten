import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HorrorView from '../views/HorrorView.vue'
import PageView from '../views/PageView.vue'
import AboutView from '../views/AboutView.vue'
import PhotosView from '../views/PhotosView.vue'
import PlantView from '../views/PlantView.vue'
import RecipesView from '../views/RecipesView.vue'
import CraftsView from '../views/Crafts.vue'
import KoreanView from '../views/KoreanView.vue'
import ArtView from '@/views/ArtView.vue'
import KnittingsView from '@/views/KnittingsView.vue'

const router = createRouter({
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/pageview', name: 'Page', component: PageView },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/horror', name: 'Horror', component: HorrorView },
    { path: '/photos', name: 'Photos', component: PhotosView },
    { path: '/plants', name: 'Plants', component: PlantView },
    { path: '/recipes', name: 'Recipes', component: RecipesView },
    { path: '/crafts', name: 'Crafts', component: CraftsView },
    { path: '/korean', name: 'Korean Practice', component: KoreanView },
    { path: '/art', name: 'Art', component: ArtView },
    { path: '/knitting', name: 'Knitting', component: KnittingsView },
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
})

export default router
