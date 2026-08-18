<template>
  <nav>
    <RouterLink class="nav-item button-border1" to="/">Sten</RouterLink>
    <RouterLink class="nav-item button-border2" to="/microblog">Microblog</RouterLink>
    <RouterLink class="nav-item button-border2" to="/recipes">Recipes</RouterLink>
    <div class="crafts-menu">
      <button class="nav-item button-border3">
        Crafts
      </button>

      <div class="crafts-dropdown ">
        <RouterLink v-for=" craft in crafts " :key="craft.path" class="craft-item" :to="craft.path">
          {{ craft.name }}
        </RouterLink>
      </div>
    </div>
    <RouterLink class="nav-item button-border1" to="/photos">Photos</RouterLink>
    <RouterLink class="nav-item button-border3" to="/plants">Plants</RouterLink>
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
