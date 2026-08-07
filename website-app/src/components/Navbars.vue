<template>
  <nav class="tiny5-regular text-shadow">
    <RouterLink class="nav-item" to="/">Home</RouterLink>
    <RouterLink class="nav-item" to="/art">Art</RouterLink>
    <RouterLink class="nav-item" to="/crafts">Crafts</RouterLink>
    <RouterLink class="nav-item" to="/knitting">Knitting</RouterLink>
    <RouterLink class="nav-item" to="/korean">Languages</RouterLink>
    <RouterLink class="nav-item" to="/photos">Photos</RouterLink>
    <RouterLink class="nav-item" to="/plants">Plants</RouterLink>
    <RouterLink class="nav-item" to="/recipes">Recipes</RouterLink>
    <RouterLink class="nav-item" to="/stopwatch">Stopwatch</RouterLink>
    <RouterLink class="nav-item" to="/models">3D Models</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import image1 from '/src/assets/images/thumbnail_IMG_1003.jpg';
import image2 from '/src/assets/images/thumbnail_IMG_1005.jpg';

const activeImage = ref( image1 );
const isOverlayActive = ref( false );

function toggleImage() {
  activeImage.value = activeImage.value === image1 ? image2 : image1;
  isOverlayActive.value = !isOverlayActive.value;
}

</script>
