<template>
  <div class="homepage" :class="{ 'overlay-active': isOverlayActive }">
    <img src="../assets/flowers-top.png" />
    <div class="home-nav-container">
      <div>
        <img src="/src/assets/images/iconofrock.jpeg" id="website-icon" />
      </div>
      <div>
        <h2 class="page-header">Horror</h2>
      </div>
      <Navbars />
    </div>
    <div class="crafts-container">
      <div class="left-panel">
        <h2 class="covered-by-your-grace-regular">Behold my handywork.</h2>
      </div>
      <div>
        <div v-for=" ( item, index ) in stories " :key="index" class="crafts-item">
          <h2>{{ item.header }}</h2>
          <div class="right-panel">
            <img v-for=" ( image, imageIndex ) in item.images " :key="imageIndex" :src="image" :alt="item.header"
              class="photo-item">
          </div>
          <div>
            <p>{{ item.teaser }}</p>
            <div>
              <button v-if=" item.isHidden " class="category-item button-border2"
                v-on:click="item.isHidden = !item.isHidden">Read
                story</button>
              <button v-if=" !item.isHidden " class="category-item button-border3"
                v-on:click="item.isHidden = true">Collapse</button>
              <div v-if=" !item.isHidden " v-for=" ( paragraph, paragraphIndex ) in formatText( item.text ) "
                :key="paragraphIndex">
                <p class="paragraph">{{ paragraph }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbars from '@/components/Navbars.vue'
import storiesData from '../textfiles/stories.json'

const stories = ref(
  storiesData.map( story => ( {
    ...story,
    isHidden: true
  } ) )
)
const getTextFiles = import.meta.glob( '/src/textfiles/stories/*.txt', {
  query: '?raw',
  import: 'default',
  eager: true
} )

const formatText = ( textPath ) => {
  const text = getTextFiles[textPath]

  if ( !text ) {
    console.warn( `Could not find text file: ${textPath}` )
    return []
  }

  return text.split( /\r?\n/ )
}

const displayText = () => {

}
</script>
