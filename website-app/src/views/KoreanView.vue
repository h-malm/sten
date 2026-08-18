<template>
	<h2 class="page-header ">Korean Practice</h2>
	<div>
		<div class="content-container">
			<div v-for=" ( story, index ) in stories " :key="index">
				<div>
					<h2>
						{{ story.header }}
					</h2>
					<button type="button" severity="secondary" @click="showDialog( index )">
						Read
					</button>
				</div>
				<Dialog :visible="visibleIndex === index" @hide="hideDialog">
					<div>
						<h2>
							{{ story.header }}
						</h2>
						<div>
							{{ story.text }}
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
import stories from '../textfiles/koreantexts.json'

const visibleIndex = ref( null )

const showDialog = ( index ) => {
	visibleIndex.value = index
}

const hideDialog = () => {
	visibleIndex.value = null
}
</script>
