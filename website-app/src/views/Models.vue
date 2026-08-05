<template>
	<h1 class="silkscreen-regular page-header text-shadow">3D Models</h1>
	<div class="scrollable-content">
		<div class="content-container">
			<div v-for=" ( model, index ) in models " :key="index">
				<div class="pixelbutton silkscreen-regular inherit-width">
					<h1 class="silkscreen-regular text-shadow">{{ model.header }}</h1>
					<button class="cancel-button tiny5-regular" type="button" @click="showDialog( index )">
						Show
					</button>
				</div>
				<Dialog :visible="visibleIndex === index" @hide="hideDialog">
					<div class="full-text lekton-regular">
						<component :is="model.content" />
						<div style="text-align: center;">Be patient. It takes a while to render.
						</div>
					</div>
					<button class="pixelbutton tiny5-regular close-button" @click="hideDialog">
						Close
					</button>
				</Dialog>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Cactus from '@/components/Cactus.vue'
import TinyRoom from '@/components/TinyRoom.vue'
import Peaches from '@/components/Peaches.vue'

const visibleIndex = ref( null )
const models = ref( [
	{ header: 'Cactus', content: Cactus },
	{ header: 'Tiny Room', content: TinyRoom },
	{ header: 'Peaches', content: Peaches },
] )

const showDialog = ( index ) => {
	visibleIndex.value = index
}

const hideDialog = () => {
	visibleIndex.value = null
}
</script>
