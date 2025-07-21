<template>
    <h1 class="silkscreen-regular page-header text-shadow">Korean Practice</h1>
    <div class="scrollable-content">
        <div class="content-container">
            <div v-for=" ( story, index ) in stories " :key=" index ">
                <div class="pixelbutton tiny5-regular">
                    <h1 class="dongle-regular korean-header">
                        {{ story.header }}
                    </h1>
                    <button class="cancel-button" type="button" severity="secondary"
                        @click="showDialog( index )">
                        Read
                    </button>
                </div>
                <Dialog :visible=" visibleIndex === index " @hide=" hideDialog ">
                    <div class="full-text dongle-regular">
                        <h1 class="korean-header">
                            {{ story.header }}
                        </h1>
                        <div class="korean-stories">
                            {{ story.text }}
                        </div>
                        <div class="align-center pixelbutton tiny5-regular">
                            <button class="cancel-button" @click="showDialog( false )">
                                Close
                            </button>
                        </div>
                    </div>
                </Dialog>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import Dialog from 'primevue/dialog'
    import stories from '../koreantexts.json'

    const visibleIndex = ref( null )

    const showDialog = ( index ) =>
    {
        visibleIndex.value = index
    }

    const hideDialog = () =>
    {
        visibleIndex.value = null
    }
</script>
