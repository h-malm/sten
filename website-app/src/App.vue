<template>
  <div loading="lazy" class="homepage" :class=" { 'overlay-active': isOverlayActive } " :style=" {
    'background-image': 'url(' + activeBackgImage + ' ) ',
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
    <link rel="icon" :href=" favIcon " type="image/x-icon">


    <div class="overlay" v-if=" isOverlayActive "></div>
    <!--Navbar-->
    <div class="website-title">
      <div class="sten-smaller bytesized-regular text-shadow">Sten
        <img loading="lazy" :src=" oldManActiveImage " alt="An old man reading the newspaper"
          class="oldman">
      </div>
    </div>
    <nav class="tiny5-regular text-shadow">
      <RouterLink class="nav-item underlined" to="/">Home</RouterLink>
      <RouterLink class="nav-item underlined" to="/about">About Me</RouterLink>
      <Dropdown v-model=" selectedCategory " :options=" categories " optionLabel="label"
        @change=" navigateToCategory " class="nav-item underlined text-shadow"
        placeholder="Content">
        <template #option=" slotProps ">
          {{ slotProps.option.label }}
        </template>
      </Dropdown>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Dialog from 'primevue/dialog';
  import Dropdown from 'primevue/dropdown';
  import image1 from './assets/images/thumbnail_IMG_1003.jpg';
  import image2 from './assets/images/thumbnail_IMG_1005.jpg'
  import backgImage1 from './assets/IMG_1084.GIF'
  import backgImage2 from './assets/IMG_1085.GIF'
  import oldMan1 from './assets/lightson.gif'
  import oldMan2 from './assets/lightsoff.gif'
  import favIcon from './assets/images/iconofrock.jpeg'
  import { useRouter } from 'vue-router';

  const visible = ref( false );

  const router = useRouter();

  const activeImage = ref( image1 );
  const activeBackgImage = ref( backgImage1 );
  const oldManActiveImage = ref( oldMan1 )
  const isOverlayActive = ref( false );

  const selectedCategory = ref( null );

  const categories = ref( [
    { label: 'Art', to: '/art' },
    { label: 'Crafts', to: '/crafts' },
    { label: 'Horror', to: '/horror' },
    { label: 'Knitting', to: '/knitting' },
    { label: 'Korean Practice', to: '/korean' },
    { label: 'Photos', to: '/photos' },
    { label: 'Plant tips', to: '/plants' },
    { label: 'Recipes', to: '/recipes' },
    { label: 'Stopwatch', to: '/stopwatch' },
    { label: '3D Models', to: '/models' },
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
    oldManActiveImage.value = oldManActiveImage.value === oldMan1 ? oldMan2 : oldMan1;
    activeBackgImage.value = activeBackgImage.value === backgImage1 ? backgImage2 : backgImage1;
    isOverlayActive.value = !isOverlayActive.value;
  }

</script>
