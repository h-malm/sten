<template>
  <div class="scrollable-content">
    <h1 class="silkscreen-regular page-header">Homepage</h1>
    <LatestUpdates></LatestUpdates>
    <p class='lekton-regular p-2 float-left'>
      This website is a personal website used to collect stuff I've made into one place! That
      includes horror stories I've written, stuff I've made like knitting and baking, and stuff I've
      learned, e.g. some Korean.
    </p>
    <p class='lekton-regular p-2 float-left'>
      The main purpose of this website was to practice my website-making skills, and that is why it
      is made using Vue (I'm hoping to work with Vue or similar frameworks in the future). Feel free
      to roam around and explore. There's not gonna be a whole lot of content since I only recently
      implemented this website, but I look forward to filling it with my creative work!
    </p>
  </div>
</template>

<script setup>
  import LatestUpdates from '../components/LatestUpdates.vue';
</script>
