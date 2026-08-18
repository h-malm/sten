<template>
	<div class="homepage" :class="{ 'overlay-active': isOverlayActive }">
		<img src="../assets/forrest-dithered-top.png" />
		<div class="home-nav-container">
			<div>
				<img src="/src/assets/images/iconofrock.jpeg" id="website-icon" />
			</div>
			<div>
				<h2 class="page-header">3D Models</h2>
			</div>
			<Navbars />
		</div>
		<div class="content-container">
			<div v-for=" ( model, index ) in models " :key="index">
				<div>
					<h2>{{ model.header }}</h2>
					<button type="button" @click="showDialog( index )">
						Show
					</button>
				</div>
				<Dialog :visible="visibleIndex === index" @hide="hideDialog">
					<div>
						<component :is="model.content" />
						<div style="text-align: center;">Be patient. It takes a while to render.
						</div>
					</div>
					<button @click="hideDialog">
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
import Navbars from '@/components/Navbars.vue'
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
