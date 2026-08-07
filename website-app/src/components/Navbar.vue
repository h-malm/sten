<template>
  <nav class="tiny5-regular text-shadow">
    <RouterLink class="nav-item" to="/">Home</RouterLink>
    <RouterLink class="nav-item" to="/about">About Me</RouterLink>
    <Dropdown v-model="selectedCategory" :options="categories" optionLabel="header" @change="navigateToCategory"
      placeholder="Content" class="nav-item">
      <template #option=" slotProps ">
        {{ slotProps.option.label }}
      </template>
    </Dropdown>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Dropdown from 'primevue/dropdown';
import image1 from '/src/assets/images/thumbnail_IMG_1003.jpg';
import image2 from '/src/assets/images/thumbnail_IMG_1005.jpg';

const visible = ref( false );
const router = useRouter();
const activeImage = ref( image1 );
const isOverlayActive = ref( false );
const selectedCategory = ref( null );

const categories = ref( [
  { label: 'Art', to: '/art', header: 'Content' },
  { label: 'Crafts', to: '/crafts', header: 'Content' },
  { label: 'Horror', to: '/horror', header: 'Content' },
  { label: 'Knitting', to: '/knitting', header: 'Content' },
  { label: 'Korean Practice', to: '/korean', header: 'Content' },
  { label: 'Photos', to: '/photos', header: 'Content' },
  { label: 'Plant tips', to: '/plants', header: 'Content' },
  { label: 'Recipes', to: '/recipes', header: 'Content' },
  { label: 'Stopwatch', to: '/stopwatch', header: 'Content' },
  { label: '3D Models', to: '/models', header: 'Content' },
] );

function navigateToCategory( event ) {
  const category = event.value;
  if ( category ) {
    router.push( { path: category.to } );
    visible.value = false;
  }
}

function toggleImage() {
  activeImage.value = activeImage.value === image1 ? image2 : image1;
  isOverlayActive.value = !isOverlayActive.value;
}

</script>
