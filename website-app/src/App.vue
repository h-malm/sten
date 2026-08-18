<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Kode+Mono:wght@400..700&family=Kranky&family=Nanum+Gothic+Coding&display=swap"
    rel="stylesheet">
  <link rel="icon" :href="favIcon" type="image/x-icon">
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import favIcon from '/src/assets/images/iconofrock.jpeg'
</script>
