<template>

    <Accordion :value=" [ '0' ] " multiple class="latest-updates">
        <div class="tiny5-regular">
            <div class="text-shadow">
                Latest Updates
            </div>
            <AccordionPanel value="0">
                <AccordionHeader>Story: Moving In</AccordionHeader>
                <AccordionContent>
                    <p class="lekton-regular">
                        A short thriller story.
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
</script>
