import { createRouter, createWebHistory } from 'vue-router'
import ArtView from '@/views/ArtView.vue'
import CraftsView from '@/views/CraftsView.vue'
import HorrorView from '../views/HorrorView.vue'
import KoreanView from '../views/KoreanView.vue'
import KnittingsView from '@/views/KnittingsView.vue'
import MicroblogView from '@/views/MicroblogView.vue'
import Models from '@/views/Models.vue'
import PhotosView from '../views/PhotosView.vue'
import PlantView from '../views/PlantView.vue'
import RecipesView from '../views/RecipesView.vue'
import StenView from '../views/StenView.vue'

const router = createRouter({
  routes: [
    { path: '/', name: 'home', component: StenView },
    { path: '/art', name: 'Art', component: ArtView },
    { path: '/crafts', name: 'Crafts', component: CraftsView },
    { path: '/horror', name: 'Horror', component: HorrorView },
    { path: '/knitting', name: 'Knitting', component: KnittingsView },
    { path: '/korean', name: 'Korean Practice', component: KoreanView },
    { path: '/microblog', name: 'Blog', component: MicroblogView },
    { path: '/models', name: '3D Models', component: Models },
    { path: '/photos', name: 'Photos', component: PhotosView },
    { path: '/plants', name: 'Plants', component: PlantView },
    { path: '/recipes', name: 'Recipes', component: RecipesView },
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
})

export default router
