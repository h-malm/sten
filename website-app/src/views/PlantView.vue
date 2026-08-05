<template>
	<h1 class="silkscreen-regular page-header text-shadow">Plants</h1>
	<div class="scrollable-content">
		<div v-for=" ( item, index ) in stories " :key="index">
			<div class="content-container-crafts">
				<div class="pixelbutton silkscreen-regular">
					<h1 class="silkscreen-regular text-shadow">{{ item.header }}</h1>
					<img v-for=" image in getImages( item ) " :key="image" class="image2" :src="image">
					<div class="lekton-regular">
						<div v-for=" paragraph in formatText( item.text ) " :key="paragraph">
							<p>{{ paragraph }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Tomatoes from '../textfiles/tomatoes.txt?raw'

import i1 from '/src/assets/images/plants/tomatoes/DSC_0010.JPG';
import i2 from '/src/assets/images/plants/tomatoes/DSC_0022.JPG';
import i3 from '/src/assets/images/plants/tomatoes/DSC_0023.JPG';
import i4 from '/src/assets/images/plants/tomatoes/DSC_0030.JPG';
import i5 from '/src/assets/images/plants/tomatoes/DSC_0035.JPG';
import i6 from '/src/assets/images/plants/tomatoes/DSC_0037.JPG';

const stories = ref( [
	{ header: 'Cherry tomatoes', text: '', image1: '', image2: '', image3: '', image4: '', image5: '', image6: '' },

] )

onMounted( () => {
	stories.value[0].text = Tomatoes;

	stories.value[0].image1 = i1;
	stories.value[0].image2 = i2;
	stories.value[0].image3 = i3;
	stories.value[0].image4 = i4;
	stories.value[0].image5 = i5;
	stories.value[0].image6 = i6;
} )

const formatText = ( text ) => {
	const paragraphs = text.split( '\n' );
	return paragraphs;
}

const getImages = ( item ) => {
	return [item.image1, item.image2, item.image3, item.image4, item.image5, item.image6].filter( image => image && image !== '' );
}
</script>
