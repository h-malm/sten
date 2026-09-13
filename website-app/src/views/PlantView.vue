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
				<div v-if=" !item.isHidden " class="markdown-content" v-html="formatText( item.text )"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { marked } from 'marked'
import { ref } from 'vue'
import Navbars from '@/components/Navbars.vue'
import plantsData from '../textfiles/plants.json'

const stories = ref( plantsData )
const getTextFiles = import.meta.glob( '/src/textfiles/plants/*.md', {
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

	return marked( text )
}
</script>
