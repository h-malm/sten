<template>

    <Accordion :value=" [ '0' ] " multiple class="latest-updates">
        <div class="tiny5-regular">
            Latest Updates
            <AccordionPanel value="0">
                <AccordionHeader>Story: Cloudy Day</AccordionHeader>
                <AccordionContent>
                    <p class="lekton-regular">
                        A short physchological thriller story.
                    </p>
                    <RouterLink class="router lekton-regular" to="/horror" @click="visible = false">
                        <u><b>Read now</b></u>
                    </RouterLink>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>
                    <p class="dongle-regular korean-header">뭐 했어요?</p>
                </AccordionHeader>
                <AccordionContent>
                    <p class="lekton-regular">
                        Read about what I did in a week. (in Korean)
                    </p>
                    <RouterLink class="router lekton-regular" to="/korean" @click="visible = false">
                        <u><b>Read now</b></u>
                    </RouterLink>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>The perfect gluten-free pancakes</AccordionHeader>
                <AccordionContent>
                    <p class="lekton-regular">
                        Take a look at my <b>perfect</b> gluten-free pancakes.
                    </p>
                    <RouterLink class="router lekton-regular" to="/recipes"
                        @click="visible = false">
                        <u><b>Read now</b></u>
                    </RouterLink>
                </AccordionContent>
            </AccordionPanel>
        </div>
    </Accordion>
</template>
<script setup>
    import Accordion from 'primevue/accordion';
    import AccordionPanel from 'primevue/accordionpanel';
    import AccordionHeader from 'primevue/accordionheader';
    import AccordionContent from 'primevue/accordioncontent';
    import { ref } from 'vue';

    const image1 = '/thumbnail_IMG_1003.jpg';
    const image2 = '/thumbnail_IMG_1005.jpg';
    const backgImage1 = '/thumbnail_IMG_1001.png';
    const backgImage2 = '/thumbnail_IMG_0999.png';

    const activeImage = ref( image1 );
    const activeBackgImage = ref( backgImage1 );
    const isOverlayActive = ref( false );

    function toggleImage ()
    {
        activeImage.value = activeImage.value === image1 ? image2 : image1;
        activeBackgImage.value = activeBackgImage.value === backgImage1 ? backgImage2 : backgImage1;
        isOverlayActive.value = !isOverlayActive.value;
    }

</script>
