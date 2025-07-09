<template>
    <h1 class="silkscreen-regular page-header">Crafts</h1>
    <div class="scrollable-content">
        <div v-for=" ( item, index ) in stories " :key=" index ">
            <div class="content-container-crafts">
                <div class="pixelbutton silkscreen-regular">
                    <h1 class="silkscreen-regular">{{ item.header }}</h1>
                    <img v-for=" image in getImages( item ) " :key=" image " class="image1"
                        :src=" image ">
                    <div class="story lekton-regular">
                        <div v-for=" paragraph in formatText( item.text ) " :key=" paragraph ">
                            <p style="margin: 1rem;">{{ paragraph }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import WrenchText from '../textfiles/crafts/wrench.txt?raw'
    import ShelfText from '../textfiles/crafts/shelf.txt?raw'
    import PillowText from '../textfiles/crafts/pillow.txt?raw'

    const stories = ref( [
        { header: 'Wrench Holder', text: '', image1: '', image2: '', },
        { header: 'Tiny Shelf', text: '', image1: '', image2: '', },
        { header: 'Pillow', text: '', image1: '', image2: '', },

    ] )

    onMounted( () =>
    {
        stories.value[ 0 ].text = WrenchText;
        stories.value[ 0 ].image1 = './src/assets/images/Crafts/1556.jpg';

        stories.value[ 1 ].text = ShelfText;
        stories.value[ 1 ].image1 = './src/assets/images/Crafts/shelf1.jpg';
        stories.value[ 1 ].image2 = './src/assets/images/Crafts/shelf2.jpg';

        stories.value[ 2 ].text = PillowText;
        stories.value[ 2 ].image1 = './src/assets/images/Crafts/skirt.jpg';
    } )

    const formatText = ( text ) =>
    {
        const paragraphs = text.split( '\n' );
        return paragraphs;
    }

    const getImages = ( item ) =>
    {
        return [ item.image1, item.image2 ].filter( image => image && image !== '' );
    }
</script>
