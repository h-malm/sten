<template>
	<div class="homepage" :class="{ 'overlay-active': isOverlayActive }">
		<img src="../assets/forrest-dithered-top.png" />
		<div class="home-nav-container">
			<div>
				<img src="/src/assets/images/iconofrock.jpeg" id="website-icon" />
			</div>
			<div>
				<h2 class="page-header">Microblog</h2>
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
