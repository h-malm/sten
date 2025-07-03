<template>
    <div class="scrollable-content">
        <Galleria :value=" images " :numVisible=" 9 "
            containerStyle=" max-width: 40rem; margin: auto;" :circular=" true "
            :autoPlay=" false ">
            <template #item=" slotProps ">
                <img :src=" slotProps.item " :alt=" slotProps.item "
                    style="max-height:27rem; display: block" />
            </template>
            <template #thumbnail=" slotProps ">
                <img :src=" slotProps.item " :alt=" slotProps.item " style="display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { Galleria } from "primevue";
    const images = ref( [] );

    const modules = import.meta.glob( '../assets/images/WebsiteImages/*', {
        eager: true,
    } );

    Object.keys( modules ).forEach( ( key ) =>
    {
        images.value.push( modules[ key ].default );
    } );

</script>
