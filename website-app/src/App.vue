<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Jersey+20&display=swap"
    rel="stylesheet">
  <link
    href="https://fonts.googleapis.com/css2?family=Dongle&family=Fira+Code:wght@300..700&family=Jersey+20&family=Nanum+Pen+Script&display=swap"
    rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Bytesized&family=Silkscreen:wght@400;700&display=swap"
    rel="stylesheet">
  <link
    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=VT323&display=swap"
    rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Lekton:ital,wght@0,400;0,700;1,400&display=swap"
    rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans&family=Tiny5&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap" rel="stylesheet">
  <link rel="icon" :href="favIcon" type="image/x-icon">
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import favIcon from '/src/assets/images/iconofrock.jpeg'
</script>
