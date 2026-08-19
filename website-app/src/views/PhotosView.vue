<template>
	<div class="homepage" :class="{ 'overlay-active': isOverlayActive }">
		<img src="../assets/flowers-top.png" />
		<div class="home-nav-container">
			<div>
				<img src="/src/assets/images/iconofrock.jpeg" id="website-icon" />
			</div>
			<div>
				<h2 class="page-header">Photos</h2>
			</div>
			<Navbars />
		</div>
		<div class="photos-container">
			<div class="left-panel">
				<p class="text-body">A collection of photos I have taken throughout the years.
					Some are taken with my old Oneplus 7 Pro, some with my new Google Pixel 9, and some with a camera
					(e.g.
					ixus, lumix, olympus, or nikon).
				</p>
				<h3>
					Categories
				</h3>
				<button class="category-item button-border1" @click="showAllPhotos()">
					All
				</button>
				<button class="category-item button-border1" @click="showAnimalsCategory()">
					Animals
				</button>
				<button class="category-item button-border2" @click="showSceneryCategory()">
					Scenery
				</button>
				<button class="category-item button-border3" @click="showMotiveCategory()">
					Motives
				</button>
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
	const modules = import.meta.glob( '../assets/images/Photos/*/*', {
		eager: true,
	} );

	Object.keys( modules ).forEach( ( key ) => {
		images.value.push( modules[key].default );
	} );
} );

// Load all photos
const showAllPhotos = () => {
	images.value.length = 0;
	const modules = import.meta.glob( '../assets/images/Photos/*/*', {
		eager: true,
	} );

	Object.keys( modules ).forEach( ( key ) => {
		images.value.push( modules[key].default );
	} );
}

// Load all photos of animals
const showAnimalsCategory = () => {
	images.value.length = 0;
	const modules = import.meta.glob( '../assets/images/Photos/Animals/*', {
		eager: true,
	} );

	Object.keys( modules ).forEach( ( key ) => {
		images.value.push( modules[key].default );
	} );
}

// Load all photos of scenery
const showSceneryCategory = () => {
	images.value.length = 0;

	const modules = import.meta.glob( '../assets/images/Photos/Scenery/*', {
		eager: true,
	} );

	Object.keys( modules ).forEach( ( key ) => {
		images.value.push( modules[key].default );
	} );
}

// Load all photos of motives
const showMotiveCategory = () => {
	images.value.length = 0;
	const modules = import.meta.glob( '../assets/images/Photos/Motives/*', {
		eager: true,
	} );

	Object.keys( modules ).forEach( ( key ) => {
		images.value.push( modules[key].default );
	} );
}
</script>
