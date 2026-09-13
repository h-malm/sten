<template>
	<div class="homepage" :class="{ 'overlay-active': isOverlayActive }">
		<img src="../assets/UI-components/flowers-top.png" />
		<div class="home-nav-container">
			<div>
				<img src="/src/assets/images/iconofrock.jpeg" id="website-icon" />
			</div>
			<div>
				<h2 class="page-header">Microblog</h2>
			</div>
			<Navbars />
		</div>
		<div v-for=" ( item, index ) in stories " :key="index" class="blog-item">
			<div class="left-panel">
				<img src="../assets/UI-components/portrait-dithered.png" alt="Portrait of Sten" class="pfp-blog">
				<h3>{{ item.header }}</h3>
				<h3 class="covered-by-your-grace-regular">{{ item.time }}</h3>
				<div v-for=" ( tag, tagIndex ) in item.tags " :key="tagIndex">
					<p style="display: inline; position: relative; flex: content;">#{{ tag }}</p>
				</div>
			</div>
			<div class="right-panel">
				<div v-if=" !item.isHidden " v-html="formatText( item.text )"></div>
				<img v-for=" ( image, imageIndex ) in item.images " :key="imageIndex" :src="image" :alt="item.header"
					class="microblog-photo" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { marked } from 'marked'
import { ref } from 'vue'
import Navbars from '@/components/Navbars.vue'
import recipesData from '../textfiles/microblog.json'

const stories = ref( recipesData )
const getTextFiles = import.meta.glob( '/src/textfiles/microblog/*.md', {
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
