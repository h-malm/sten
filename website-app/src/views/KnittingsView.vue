<template>
	<h2 page-header ">Knitting</h2>
	<div>
		<div v-for=" ( item, index ) in stories " :key="index">
		<div class="content-container-single-col">
			<div>
				<h2>{{ item.header }}</h2>
				<a :href="item.url">{{ item.url }}</a>
				<div>
					<div v-for=" paragraph in formatText( item.text ) " :key="paragraph">
						<p style="margin: .5rem;">{{ paragraph }}</p>
					</div>
				</div>
				<img v-for=" image in getImages( item ) " :key="image" :src="image">
			</div>
		</div>
		</div>
		</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Blueshirt from '../textfiles/knittings/blueshirt.txt?raw'
import AlpacaShirt from '../textfiles/knittings/alpacka.txt?raw'
import Gloves from '../textfiles/knittings/gloves.txt?raw'
import YellowSweather from '../textfiles/knittings/yellowsweather.txt?raw'
import FluffyALpacaSweather from '../textfiles/knittings/fluffyalpacasweather.txt?raw'
import StripedAlpacaSweather from '../textfiles/knittings/stripedalpacasweather.txt?raw'
import ThinAlpacaGloves from '../textfiles/knittings/thinalpacagloves.txt?raw'

import i1 from '/src/assets/images/knittings/blue.jpg';
import i2 from '/src/assets/images/knittings/blue1.jpg';
import i3 from '/src/assets/images/knittings/blue3.jpg';
import i4 from '/src/assets/images/knittings/blue4.jpg';
import i5 from '/src/assets/images/knittings/alpacka1.jpg';
import i6 from '/src/assets/images/knittings/alpacka2.jpg';
import i7 from '/src/assets/images/knittings/alpacka3.jpg';

import i8 from '/src/assets/images/knittings/gloves.jpg';

import i9 from '/src/assets/images/knittings/gultröja.JPG';
import i10 from '/src/assets/images/knittings/gultröja2.JPG';
import i11 from '/src/assets/images/knittings/gultröja3.JPG';
import i12 from '/src/assets/images/knittings/gultröja4.JPG';

import i13 from '/src/assets/images/knittings/fluffyshirt1.png';
import i14 from '/src/assets/images/knittings/fluffyshirt2.png';
import i15 from '/src/assets/images/knittings/fluffyshirt3.jpeg';
import i16 from '/src/assets/images/knittings/fluffyshirt4.jpeg';

import i17 from '/src/assets/images/knittings/stripedshirt.png';
import i18 from '/src/assets/images/knittings/stripedshirt1.jpeg';
import i19 from '/src/assets/images/knittings/stripedshirt2.jpeg';
import i20 from '/src/assets/images/knittings/stripedshirt3.jpeg';

import i21 from '/src/assets/images/knittings/browngloves.jpeg';

const stories = ref( [
	{ header: 'Chunky Wool Sweather', text: '', image1: '', image2: '', image3: '', image4: '', image5: '', url: '' },
	{ header: 'Thinner Alpaca Sweather', text: '', image1: '', image2: '', image3: '', image4: '', image5: '', url: '' },
	{ header: 'Wool Gloves', text: '', image1: '', image2: '', image3: '', image4: '', image5: '', url: '' },
	{ header: 'Cotton Sweather', text: '', image1: '', image2: '', image3: '', image4: '', image5: '', url: '' },
	{ header: 'Fluffy Alpaca Sweather', text: '', image1: '', image2: '', image3: '', image4: '', url: '' },
	{ header: 'Striped Alpaca Sweather', text: '', image1: '', image2: '', image3: '', image4: '', image5: '', url: '' },
	{ header: 'Brown Thin Alpaca Gloves', text: '', image1: '', image2: '', image3: '', image4: '', image5: '', url: '' },
] )

onMounted( () => {
	stories.value[0].text = Blueshirt;
	stories.value[0].image4 = i1;
	stories.value[0].image2 = i2;
	stories.value[0].image3 = i3;
	stories.value[0].image1 = i4;
	stories.value[0].url = 'https://www.garnstudio.com/pattern.php?id=1378&cid=12';

	stories.value[1].text = AlpacaShirt;
	stories.value[1].image1 = i5;
	stories.value[1].image2 = i6;
	stories.value[1].image3 = i7;
	stories.value[1].url = 'https://www.garnstudio.com/pattern.php?id=10415&cid=12';

	stories.value[2].text = Gloves;
	stories.value[2].image1 = i8;
	stories.value[2].url = 'https://www.garnstudio.com/pattern.php?id=4222&cid=12';

	stories.value[3].text = YellowSweather;
	stories.value[3].image1 = i9;
	stories.value[3].image2 = i10;
	stories.value[3].image3 = i11;
	stories.value[3].image4 = i12;
	stories.value[3].url = 'https://www.garnstudio.com/pattern.php?id=1423&cid=11';

	stories.value[4].text = FluffyALpacaSweather;
	stories.value[4].image1 = i13;
	stories.value[4].image2 = i14;
	stories.value[4].image3 = i15;
	stories.value[4].image4 = i16;

	stories.value[5].text = StripedAlpacaSweather;
	stories.value[5].image1 = i17;
	stories.value[5].image2 = i18;
	stories.value[5].image3 = i19;
	stories.value[5].image4 = i20;

	stories.value[6].text = ThinAlpacaGloves;
	stories.value[6].image1 = i21;

} )

const formatText = ( text ) => {
	const paragraphs = text.split( '\n' );
	return paragraphs;
}

const getImages = ( item ) => {
	return [item.image1, item.image2, item.image3, item.image4, item.image5].filter( image => image && image !== '' );
}
</script>
