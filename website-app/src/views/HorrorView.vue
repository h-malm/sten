<template>
  <div class="homepage" :class="{ 'overlay-active': isOverlayActive }">
    <img src="../assets/forrest-dithered-top.png" />
    <div class="home-nav-container">
      <div>
        <img src="/src/assets/images/iconofrock.jpeg" id="website-icon" />
      </div>
      <div>
        <h2 class="page-header">Horror</h2>
      </div>
      <Navbars />
    </div>
    <div id="main-content">
      <div v-for=" ( story, index ) in stories " :key="index">
        <div>
          <h2>{{ story.header }}</h2>
          <button type="button" @click="showDialog( index )">
            Read
          </button>
        </div>
        <Dialog :visible="visibleIndex === index" @hide="hideDialog">
          <div>
            <h2>
              {{ story.header }}
            </h2>
            <div>
              <div v-for=" paragraph in formatText( story.text ) " :key="paragraph">
                <p style="margin: 1rem;">{{ paragraph }}</p>
              </div>
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
import { ref, onMounted } from 'vue';
import CloudyDayText from '../textfiles/stories/CloudyDay.txt?raw';
import Dialog from 'primevue/dialog';
import MovingIn from '../textfiles/stories/MovingIn.txt?raw';
import Navbars from '@/components/Navbars.vue';

const visibleIndex = ref( null );
const stories = ref( [
  { header: 'Cloudy Day', text: '' },
  { header: 'Moving in', text: '' }
] );

onMounted( () => {
  stories.value[0].text = CloudyDayText
  stories.value[1].text = MovingIn
} );

const showDialog = ( index ) => {
  visibleIndex.value = index
};

const hideDialog = () => {
  visibleIndex.value = null
};

const formatText = ( text ) => {
  const paragraphs = text.split( '\n' );
  return paragraphs;
};
</script>
