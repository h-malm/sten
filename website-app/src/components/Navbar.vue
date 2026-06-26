<template>
  <div loading="lazy" class="homepage" :class=" { 'overlay-active': isOverlayActive } " :style=" {
    'background-image': 'url(' + activeBackgImage + ' ) ',
  } ">
    <img v-on:click=" toggleImage " :src=" activeImage " alt="A Lightswitch" class="lightswitch">

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
      <Dropdown v-model=" selectedCategory " :options=" categories " optionLabel="header"
        @change=" navigateToCategory " placeholder="Content" class="nav-item underlined">
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
  import { useRouter } from 'vue-router';
  import Dropdown from 'primevue/dropdown';
  import image1 from '/src/assets/images/thumbnail_IMG_1003.jpg';
  import image2 from '/src/assets/images/thumbnail_IMG_1005.jpg'
  import backgImage1 from '/src/assets/IMG_1084.GIF'
  import backgImage2 from '/src/assets/IMG_1085.GIF'
  import oldMan1 from '/src/assets/lightson.gif'
  import oldMan2 from '/src/assets/lightsoff.gif'
  import favIcon from '/src/assets/images/iconofrock.jpeg'

  const visible = ref( false );

  const router = useRouter();

  const activeImage = ref( image1 );
  const activeBackgImage = ref( backgImage1 );
  const oldManActiveImage = ref( oldMan1 )
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
    oldManActiveImage.value = oldManActiveImage.value === oldMan1 ? oldMan2 : oldMan1;
    activeBackgImage.value = activeBackgImage.value === backgImage1 ? backgImage2 : backgImage1;
    isOverlayActive.value = !isOverlayActive.value;
  }

</script>
