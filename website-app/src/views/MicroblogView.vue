<template>
	<div class="lekton-regular homepage" :class="{ 'overlay-active': isOverlayActive }">
		<img src="../assets/forrest-dithered-top.png" />
		<div class="home-nav-container">
			<div>
				<img src="/src/assets/images/iconofrock.jpeg" id="website-icon" />
			</div>
			<div>
				<h1 class="silkscreen-regular page-header">Microblog</h1>
			</div>
			<Navbars />
		</div>
		<div class="home-content-container">

		</div>
	</div>
</template>

<script setup>
import Navbars from '@/components/Navbars.vue';
</script>
