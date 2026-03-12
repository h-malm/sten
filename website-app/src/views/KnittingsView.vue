<template>
    <h1 class="silkscreen-regular page-header text-shadow">Knitting</h1>
    <div class="scrollable-content">
        <div v-for=" ( item, index ) in stories " :key=" index ">
            <div class="content-container-crafts">
                <div class="pixelbutton silkscreen-regular">
                    <h1 class="silkscreen-regular text-shadow">{{ item.header }}</h1>
                    <a class="links" :href=" item.url ">{{ item.url }}</a>
                    <div class="story lekton-regular">
                        <div v-for=" paragraph in formatText( item.text ) " :key=" paragraph ">
                            <p style="margin: 1rem;">{{ paragraph }}</p>
                        </div>
                    </div>
                    <img v-for=" image in getImages( item ) " :key=" image " class="image1"
                        :src=" image ">
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

    const stories = ref( [
        { header: 'Wool Sweather', text: '', image1: '', image2: '', image3: '', image4: '', url: '' },
        { header: 'Alpaca', text: '', image1: '', image2: '', image3: '', image4: '', url: '' },
        { header: 'Gloves', text: '', image1: '', image2: '', image3: '', image4: '', url: '' },
        { header: 'Cotton Sweather', text: '', image1: '', image2: '', image3: '', image4: '', url: '' },
    ] )

    onMounted( () => {
        stories.value[ 0 ].text = Blueshirt;
        stories.value[ 0 ].image1 = i1;
        stories.value[ 0 ].image2 = i2;
        stories.value[ 0 ].image3 = i3;
        stories.value[ 0 ].image4 = i4;
        stories.value[ 0 ].url = 'https://www.garnstudio.com/pattern.php?id=1378&cid=12';

        stories.value[ 1 ].text = AlpacaShirt;
        stories.value[ 1 ].image1 = i5;
        stories.value[ 1 ].image2 = i6;
        stories.value[ 1 ].image3 = i7;
        stories.value[ 1 ].url = 'https://www.garnstudio.com/pattern.php?id=10415&cid=12';

        stories.value[ 2 ].text = Gloves;
        stories.value[ 2 ].image1 = i8;
        stories.value[ 2 ].url = 'https://www.garnstudio.com/pattern.php?id=4222&cid=12';

        stories.value[ 3 ].text = YellowSweather;
        stories.value[ 3 ].image1 = i9;
        stories.value[ 3 ].image2 = i10;
        stories.value[ 3 ].image3 = i11;
        stories.value[ 3 ].image3 = i12;
        stories.value[ 3 ].url = 'https://www.garnstudio.com/pattern.php?id=10415&cid=12';

    } )

    const formatText = ( text ) => {
        const paragraphs = text.split( '\n' );
        return paragraphs;
    }

    const getImages = ( item ) => {
        return [ item.image1, item.image2, item.image3, item.image4 ].filter( image => image && image !== '' );
    }
</script>
