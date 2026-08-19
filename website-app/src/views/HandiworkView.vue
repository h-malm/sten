<template>
	<div class=" homepage" :class="{ 'overlay-active': isOverlayActive }">
		<img src="../assets/flowers-top.png" />
		<div class="home-nav-container">
			<div>
				<img src="/src/assets/images/iconofrock.jpeg" id="website-icon" />
			</div>
			<div>
				<h2 class=" page-header">Handiwork</h2>
			</div>
			<Navbars />
		</div>
		<div id="main-content">
			<div v-for=" ( item, index ) in stories " :key="index">
				<div class="content-container-single-col">
					<div>
						<h2>{{ item.header }}</h2>
						<img v-for=" image in getImages( item ) " :key="image" :src="image">
						<div>
							<div v-for=" paragraph in formatText( item.text ) " :key="paragraph">
								<p>{{ paragraph }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbars from '@/components/Navbars.vue'
import PillowText from '../textfiles/crafts/pillow.txt?raw'
import ShelfText from '../textfiles/crafts/shelf.txt?raw'
import WrenchText from '../textfiles/crafts/wrench.txt?raw'

import i1 from '/src/assets/images/Crafts/1556.jpg';
import i2 from '/src/assets/images/Crafts/shelf1.jpg';
import i3 from '/src/assets/images/Crafts/shelf2.jpg';
import i4 from '/src/assets/images/Crafts/skirt.jpg';

const stories = ref( [
	{ header: 'Wrench Holder', text: '', image1: '', image2: '', },
	{ header: 'Tiny Shelf', text: '', image1: '', image2: '', },
	{ header: 'Pillow', text: '', image1: '', image2: '', },

] )

onMounted( () => {
	stories.value[0].text = WrenchText;
	stories.value[0].image1 = i1;

	stories.value[1].text = ShelfText;
	stories.value[1].image1 = i2;
	stories.value[1].image2 = i3;

	stories.value[2].text = PillowText;
	stories.value[2].image1 = i4;
} )

const formatText = ( text ) => {
	const paragraphs = text.split( '\n' );
	return paragraphs;
}

const getImages = ( item ) => {
	return [item.image1, item.image2].filter( image => image && image !== '' );
}
</script>
