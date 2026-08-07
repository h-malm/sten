<template>
	<h1 class="silkscreen-regular page-header text-shadow">Korean Practice</h1>
	<div>
		<div class="content-container">
			<div v-for=" ( story, index ) in stories " :key="index">
				<div class="tiny5-regular">
					<h1 class="dongle-regular">
						{{ story.header }}
					</h1>
					<button type="button" severity="secondary" @click="showDialog( index )">
						Read
					</button>
				</div>
				<Dialog :visible="visibleIndex === index" @hide="hideDialog">
					<div class="dongle-regular">
						<h1>
							{{ story.header }}
						</h1>
						<div>
							{{ story.text }}
						</div>
					</div>
					<button class="tiny5-regular" @click="hideDialog">
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
import stories from '../textfiles/koreantexts.json'

const visibleIndex = ref( null )

const showDialog = ( index ) => {
	visibleIndex.value = index
}

const hideDialog = () => {
	visibleIndex.value = null
}
</script>
