<template>
  <img src="../assets/under construction.gif" style="position:fixed; width: 12rem; top:0;left: 0;" />
  <img src="../assets/under construction.gif" style="position:fixed; width: 12rem; bottom:0; right: 0;" />
  <nav class="tiny5-regular ">

    <RouterLink class="nav-item" to="/">Sten</RouterLink>
    <RouterLink class="nav-item" to="/microblog">Microblog</RouterLink>
    <div class="crafts-menu">
      <button class="nav-item">
        Crafts
      </button>

      <div class="crafts-dropdown">
        <RouterLink v-for=" craft in crafts " :key="craft.path" class="craft-item" :to="craft.path">
          {{ craft.name }}
        </RouterLink>
      </div>
    </div>
    <RouterLink class="nav-item" to="/recipes">Recipes</RouterLink>
    <RouterLink class="nav-item" to="/photos">Photos</RouterLink>
    <RouterLink class="nav-item" to="/plants">Plants</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
const crafts = [
  { name: 'Art', path: '/art' },
  { name: 'Handiwork', path: '/handiwork' },
  { name: 'Horror', path: '/horror' },
  { name: 'Recipes', path: '/recipes' },
  { name: '3D Models', path: '/models' },
]

</script>
