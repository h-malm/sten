<template>
    <div class="scrollable-content">
        <h1 class="silkscreen-regular page-header">Recipes</h1>
        <div class="content-container">
            <div v-for=" ( story, index ) in stories " :key=" index ">
                <div class="pixelbutton silkscreen-regular">
                    <h1 class="silkscreen-regular">{{ story.header }}</h1>
                    <!-- <img> -->
                    <button class="cancel-button tiny5-regular" type="button"
                        @click="showDialog( index )">
                        Read
                    </button>
                </div>
                <Dialog :visible=" visibleIndex === index " @hide=" hideDialog ">
                    <div class="full-text lekton-regular">
                        <h1 class="silkscreen-regular">
                            {{ story.header }}
                        </h1>
                        <div class="story">
                            <div v-for=" paragraph in formatText( story.text ) " :key=" paragraph ">
                                <p style="margin: 1rem;">{{ paragraph }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="align-center pixelbutton tiny5-regular">
                        <button class="cancel-button" @click=" hideDialog ">
                            Close
                        </button>
                    </div>
                </Dialog>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import Dialog from 'primevue/dialog'
    import Pancakes from '../recipes/Pancakes.txt?raw'
    import ChocolateChipCookies from '../recipes/ChocolateChipCookies.txt?raw'
    import Mudcake from '../recipes/Mudcake.txt?raw'
    import Meatballs from '../recipes/Meatballs.txt?raw'

    const visibleIndex = ref( null )
    const stories = ref( [
        { header: 'Pancakes', text: '' },
        { header: 'Chocolate Chip Cookies', text: '' },
        { header: 'Mudcake', text: '' },
        { header: 'Meatballs', text: '' }
    ] )

    onMounted( () =>
    {
        stories.value[ 0 ].text = Pancakes
        stories.value[ 1 ].text = ChocolateChipCookies
        stories.value[ 2 ].text = Mudcake
        stories.value[ 3 ].text = Meatballs
    } )

    const showDialog = ( index ) =>
    {
        visibleIndex.value = index
    }

    const hideDialog = () =>
    {
        visibleIndex.value = null
    }

    const formatText = ( text ) =>
    {
        const paragraphs = text.split( '\n' );
        return paragraphs;
    }
</script>
