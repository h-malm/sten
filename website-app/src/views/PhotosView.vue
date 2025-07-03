<template>
    <div class="scrollable-content">
        <h1 class="silkscreen-regular page-header">Photos</h1>

        <div>
            <Galleria v-model:activeIndex=" activeIndex " v-model:visible=" displayCustom "
                :value=" images " :responsiveOptions=" responsiveOptions " :numVisible=" 7 "
                containerStyle="max-width: 850px" :circular=" true " :fullScreen=" true "
                :showItemNavigators=" true " :showThumbnails=" false ">
                <template #item=" slotProps ">
                    <img :src=" slotProps.item.itemImageSrc " :alt=" slotProps.item.alt "
                        style="width: 100%; display: block" />
                </template>
                <template #thumbnail=" slotProps ">
                    <img :src=" slotProps.item.thumbnailImageSrc " :alt=" slotProps.item.alt "
                        style="display: block" />
                </template>
            </Galleria>

            <div v-if=" images " style="max-width: 400px">
                <div v-for=" ( image, index ) of images " :key=" index ">
                    <img :src=" image.thumbnailImageSrc " :alt=" image.alt " style="cursor: pointer"
                        @click="imageClick( index )" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { Galleria } from 'primevue';

    const images = ref();
    const activeIndex = ref( 0 );
    const responsiveOptions = ref( [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ] );

    const displayCustom = ref( false );

    const imageClick = ( index ) =>
    {
        activeIndex.value = index;
        displayCustom.value = true;
    };

</script>
