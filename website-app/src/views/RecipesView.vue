<template>
	<div class="homepage" :class="{ 'overlay-active': isOverlayActive }">
		<img src="../assets/forrest-dithered-top.png" />
		<div class="home-nav-container">
			<div>
				<img src="/src/assets/images/iconofrock.jpeg" id="website-icon" />
			</div>
			<div>
				<h2 class="page-header">Recipes</h2>
			</div>
			<Navbars />
		</div>
		<div class="content-container">
			<div v-for=" ( story, index ) in stories " :key="index">
				<div>
					<h1>{{ story.header }}</h1>
					<button type="button" @click="showDialog( index )">
						Read
					</button>
				</div>
				<Dialog :visible="visibleIndex === index" @hide="hideDialog">
					<div>
						<h1>
							{{ story.header }}
						</h1>
						<div>
							<div v-for=" paragraph in formatText( story.text ) " :key="paragraph">
								<p style="margin: 1rem;">{{ paragraph }}</p>
							</div>
						</div>
					</div>
					<button @click="hideDialog">
						Close
					</button>
				</Dialog>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ChocolateChipCookies from '../textfiles/recipes/ChocolateChipCookies.txt?raw'
import Dialog from 'primevue/dialog'
import Mudcake from '../textfiles/recipes/Mudcake.txt?raw'
import Meatballs from '../textfiles/recipes/Meatballs.txt?raw'
import Navbars from '@/components/Navbars.vue'
import Pancakes from '../textfiles/recipes/Pancakes.txt?raw'

const visibleIndex = ref( null )
const stories = ref( [
	{ header: 'Pancakes', text: '' },
	{ header: 'Chocolate Chip Cookies', text: '' },
	{ header: 'Mudcake', text: '' },
	{ header: 'Meatballs', text: '' }
] )

onMounted( () => {
	stories.value[0].text = Pancakes
	stories.value[1].text = ChocolateChipCookies
	stories.value[2].text = Mudcake
	stories.value[3].text = Meatballs
} )

const showDialog = ( index ) => {
	visibleIndex.value = index
}

const hideDialog = () => {
	visibleIndex.value = null
}

const formatText = ( text ) => {
	const paragraphs = text.split( '\n' );
	return paragraphs;
}
</script>
