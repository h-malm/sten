<template>
	<div class=" homepage" :class="{ 'overlay-active': isOverlayActive }">
		<img src="../assets/flowers-top.png" />
		<div class="home-nav-container">
			<div>
				<img src="/src/assets/images/iconofrock.jpeg" id="website-icon" />
			</div>
			<div>
				<h2 class=" page-header">Crafts</h2>
			</div>
			<Navbars />
		</div>
		<div class="crafts-container">
			<div class="left-panel">
				<h2 class="covered-by-your-grace-regular">Behold my handywork.</h2>
			</div>
			<div>
				<div v-for=" ( item, index ) in stories " :key="index" class="crafts-item">
					<div>
						<h2>{{ item.header }}</h2>
						<div v-for=" ( paragraph, paragraphIndex ) in formatText( item.text ) " :key="paragraphIndex">
							<p>{{ paragraph }}</p>
						</div>
					</div>
					<div class="right-panel">
						<img v-for=" ( image, imageIndex ) in item.images " :key="imageIndex" :src="image"
							:alt="item.header" class="photo-item">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Navbars from '@/components/Navbars.vue'
import storiesData from '../textfiles/crafts.json'

const stories = ref( storiesData )

const formatText = ( text ) => {
	return text.split( '\n' )
}
</script>
