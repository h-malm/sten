<template>
    <h1 class="silkscreen-regular page-header text-shadow">Art</h1>
    <div class="scrollable-content">
        <p class="lekton-regular p-2">A collection of stuff I've drawn or painted. I don't have a
            specific style, but mostly draw whatever is fun or I think will look good.</p>
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

    const modules = import.meta.glob( '../assets/images/drawings/*', {
        eager: true,
    } );

    Object.keys( modules ).forEach( ( key ) =>
    {
        images.value.push( modules[ key ].default );
    } );

</script>
