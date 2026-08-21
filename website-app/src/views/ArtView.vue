<template>
    <div class=" homepage" :class="{ 'overlay-active': isOverlayActive }">
        <img src="../assets/flowers-top.png" />
        <div class="home-nav-container">
            <div>
                <img src="/src/assets/images/iconofrock.jpeg" id="website-icon" />
            </div>
            <div>
                <h2 class="page-header">Art</h2>
            </div>
            <Navbars />
        </div>
        <div class="photos-container">
            <div class="left-panel">
                <p class="text-body">
                    A collection of stuff I've drawn or painted. I don't have a
                    specific style, but mostly draw whatever is fun or I think will look good.
                    I'm most proud of the kettle and the tree/mountain view :3</p>
                <img src="" />
            </div>
            <div>
                <div v-for=" ( image, i ) in images " :key="i" class="photo-container">
                    <img :src="image" :alt="'Could not load image'" class="photo-item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Navbars from "@/components/Navbars.vue";

const images = ref( [] );

// Initially load all photos
onMounted( () => {
    images.value.length = 0;
    const modules = import.meta.glob( '../assets/drawings/*', {
        eager: true,
    } );

    Object.keys( modules ).forEach( ( key ) => {
        images.value.push( modules[key].default );
    } );
} );

</script>
