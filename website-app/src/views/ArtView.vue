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
        <div>
            <p class="">
                A collection of stuff I've drawn or painted. I don't have a
                specific style, but mostly draw whatever is fun or I think will look good.
            </p>
            <Galleria :value="images" :numVisible="9" containerStyle=" max-width: 40rem; margin: auto;" :circular="true"
                :autoPlay="false" :showItemNavigators="true" :showItemNavigatorsOnHover="true" loading="lazy">
                <template #item=" slotProps ">
                    <img :src="slotProps.item" :alt="slotProps.item" style="max-height:27rem; display: block" />
                </template>
                <template #thumbnail=" slotProps ">
                    <img :src="slotProps.item" :alt="slotProps.item" style="display: block" />
                </template>
            </Galleria>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Galleria } from "primevue";
import Navbars from "@/components/Navbars.vue";

const images = ref( [] );

const modules = import.meta.glob( '../assets/images/drawings/*', {
    eager: true,
} );

Object.keys( modules ).forEach( ( key ) => {
    images.value.push( modules[key].default );
} );

</script>
