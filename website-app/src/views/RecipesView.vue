<template>
	<div class="homepage" :class="{ 'overlay-active': isOverlayActive }">
		<image src="../assets/flowers-top.png" />
		<div class="home-nav-container">
			<div>
				<image src="/src/assets/images/iconofrock.jpeg" id="website-icon" />
			</div>
			<div>
				<h2 class="page-header">Recipes</h2>
			</div>
			<Navbars />
		</div>
		<div v-for=" ( story, index ) in stories " :key="index" class="recipes-container">

			<div class="recipe-item">
				<h2>
					{{ story.header }}
				</h2>
				<div v-for=" paragraph in formatText( story.text ) " :key="paragraph">
					<p class="paragraph">{{ paragraph }}</p>
				</div>
			</div>
			<div>
				<img v-for=" image in getImages( story ) " :key="image" :src="image" class="recipe-image">
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ChocolateChipCookies from '../textfiles/recipes/ChocolateChipCookies.txt?raw'
import Mudcake from '../textfiles/recipes/Mudcake.txt?raw'
import Meatballs from '../textfiles/recipes/Meatballs.txt?raw'
import Navbars from '@/components/Navbars.vue'
import Pancakes from '../textfiles/recipes/Pancakes.txt?raw'

const stories = ref( [
	{ header: 'Pancakes', text: '', image1: '', image2: '' },
	{ header: 'Chocolate Chip Cookies', text: '', image1: '', image2: '' },
	{ header: 'Mudcake', text: '', image1: '', image2: '' },
	{ header: 'Meatballs', text: '', image1: '', image2: '' }
] )

onMounted( () => {
	stories.value[0].text = Pancakes
	stories.value[0].image1 = ''

	stories.value[1].text = ChocolateChipCookies
	stories.value[1].image1 = '/src/assets/images/food/untitled.jpeg'
	stories.value[1].image2 = '/src/assets/images/food/IMG_20250308_182525.jpg'

	stories.value[2].text = Mudcake
	stories.value[2].image1 = '/src/assets/images/food/IMG_20240608_213526.jpg'

	stories.value[3].text = Meatballs
	stories.value[3].image1 = '/src/assets/images/food/IMG_20241208_180903.jpg'
} )

const formatText = ( text ) => {
	const paragraphs = text.split( '\n' );
	return paragraphs;
}

const getImages = ( item ) => {
	return [item.image1, item.image2].filter( image => image && image !== '' );
}
</script>
