<template>
	<div class="homepage" :class="{ 'overlay-active': isOverlayActive }">
		<img src="../assets/UI-components/flowers-top.png" />
		<div class="home-nav-container">
			<div>
				<img src="/src/assets/images/iconofrock.jpeg" id="website-icon" />
			</div>
			<div>
				<h2 class="page-header">Plants</h2>
			</div>
			<Navbars />
		</div>
		<div v-for=" ( item, index ) in stories " :key="index" class="crafts-item">
			<div class="photo-container">
				<img v-for=" ( image, imageIndex ) in item.images " :key="imageIndex" :src="image" :alt="item.header"
					class="photo-item" loading="lazy">
			</div>
			<div>
				<h2>{{ item.header }}</h2>
				<div class="photo-container">
					<div v-if=" !item.isHidden " v-for=" ( paragraph, paragraphIndex ) in formatText( item.text ) "
						:key="paragraphIndex">
						<p class="paragraph">{{ paragraph }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Navbars from '@/components/Navbars.vue'
import plantsData from '../textfiles/plants.json'

const stories = ref( plantsData )
const getTextFiles = import.meta.glob( '/src/textfiles/plants/*.txt', {
	query: '?raw',
	import: 'default',
	eager: true
} )

const formatText = ( textPath ) => {
	const text = getTextFiles[textPath]

	if ( !text ) {
		console.warn( `Could not find text file: ${textPath}` )
		return []
	}

	return text.split( /\r?\n/ )
}
</script>
