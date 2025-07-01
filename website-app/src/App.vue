<template>
  <div class="homepage" :class=" { 'overlay-active': isOverlayActive } " :style=" {
    'background-image': 'url(' + activeBackgImage + ' ) ',
    'background-size': 'cover',
    'min-height': '100vh',
  } ">
    <img v-on:click=" toggleImage " :src=" activeImage " alt="A Lightswitch" class="lightswitch">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>


    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Jersey+20&display=swap"
      rel="stylesheet">
    <link
      href="https://fonts.googleapis.com/css2?family=Dongle&family=Fira+Code:wght@300..700&family=Jersey+20&family=Nanum+Pen+Script&display=swap"
      rel="stylesheet">
    <link
      href="https://fonts.googleapis.com/css2?family=Bytesized&family=Silkscreen:wght@400;700&display=swap"
      rel="stylesheet">
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=VT323&display=swap"
      rel="stylesheet">
    <link
      href="https://fonts.googleapis.com/css2?family=Lekton:ital,wght@0,400;0,700;1,400&display=swap"
      rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans&family=Tiny5&display=swap"
      rel="stylesheet">
    <link rel="icon" href="src/images/thumbnail_IMG_1003.jpg" type="image/x-icon">


    <div class="overlay" v-if=" isOverlayActive "></div>
    <!--Navbar-->
    <div class="website-title">
      <div class="sten-smaller bytesized-regular">Sten
      </div>
    </div>
    <nav class="tiny5-regular">
      <RouterLink class="nav-item" to="/">Home</RouterLink>
      <RouterLink class="nav-item" to="/about">About Me</RouterLink>
      <!-- <button @click="">Content</button> -->
      <button class="nav-item" @click="visible = true">Content</button>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
  <Dialog v-model:visible=" visible " modal class="tiny5-regular">
    <h1 class="header padding">What do you wanna see?</h1>
    <div class="body-text content-categories">
      <RouterLink class="router" to="/horror" @click="visible = false">
        <div class="div1">&gt;</div>
        Horror
        <div class="div1 ">&lt;</div>
      </RouterLink>
    </div>
    <div class="body-text content-categories">
      <RouterLink class="router" to="/photos" @click="visible = false">
        <div class="div1">&gt;</div>
        Photos
        <div class="div1">&lt;</div>
      </RouterLink>
    </div>
    <div class="body-text content-categories">
      <RouterLink class="router" to="/plants" @click="visible = false">
        <div class="div1">&gt;</div>
        Plant tips
        <div class="div1">&lt;</div>
      </RouterLink>
    </div>
    <div class="body-text content-categories">
      <RouterLink class="router" to="/recipes" @click="visible = false">
        <div class="div1">&gt;</div>
        Recipes
        <div class="div1">&lt;</div>
      </RouterLink>
    </div>
    <div class="body-text content-categories">
      <RouterLink class="router" to="/stuffimade" @click="visible = false">
        <div class="div1">&gt;</div>
        Stuff I've made
        <div class="div1">&lt;</div>
      </RouterLink>
    </div>
    <div class="body-text content-categories">
      <RouterLink class="router" to="/korean" @click="visible = false">
        <div class="div1">&gt;</div>
        Korean Practice
        <div class="div1">&lt;</div>
      </RouterLink>
    </div>
    <div class="padding align-center pixelbutton body-text">

      <button class="cancel-button" type="button" @click="visible = false">
        Cancel
      </button>
    </div>
  </Dialog>

</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Dialog from 'primevue/dialog';
  import image1 from '@/images/thumbnail_IMG_1003.jpg'

  const visible = ref( false );

  // const image1 = '/src/images/thumbnail_IMG_1003.jpg';
  const image2 = '/src/images//thumbnail_IMG_1005.jpg';
  const backgImage1 = '/src/images//thumbnail_IMG_1001.png';
  const backgImage2 = '/src/images//thumbnail_IMG_0999.png';

  const activeImage = ref( image1 );
  const activeBackgImage = ref( backgImage1 );
  const isOverlayActive = ref( false );

  function toggleImage()
  {
    activeImage.value = activeImage.value === image1 ? image2 : image1;
    activeBackgImage.value = activeBackgImage.value === backgImage1 ? backgImage2 : backgImage1;
    isOverlayActive.value = !isOverlayActive.value;
  }



</script>

<style scoped></style>
