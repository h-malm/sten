<template>
  <div class="scrollable-content">
    <h1 class="silkscreen-regular page-header">Horror Stories</h1>
    <!-- <img src="https://media.tenor.com/PQ9sokZx0BoAAAAj/book.gif"> -->
    <div class="content-container">
      <div v-for=" ( story, index ) in stories " :key=" index ">
        <div class="pixelbutton silkscreen-regular">
          <h1 class="silkscreen-regular">{{ story.header }}</h1>
          <button class="cancel-button tiny5-regular" type="button" @click="showDialog( index )">
            Read
          </button>
        </div>
        <Dialog :visible=" visibleIndex === index " @hide=" hideDialog ">
          <div class="full-text lekton-regular">
            <h1 class="silkscreen-regular">
              {{ story.header }}
            </h1>
            <div class="story">
              <div v-for=" paragraph in formatText( story.text ) " :key=" paragraph ">
                <p style="margin: 1rem;">{{ paragraph }}</p>
              </div>
            </div>
          </div>
          <div class="align-center pixelbutton tiny5-regular">
            <button class="cancel-button" @click=" hideDialog ">
              Close
            </button>
          </div>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import Dialog from 'primevue/dialog'
  import CloudyDayText from '../stories/CloudyDay.txt?raw'
  import MovingIn from '../stories/MovingIn.txt?raw'

  const visibleIndex = ref( null )
  const stories = ref( [
    { header: 'Cloudy Day', text: '' },
    { header: 'Moving in', text: '' }
  ] )

  onMounted( () =>
  {
    stories.value[ 0 ].text = CloudyDayText
    stories.value[ 1 ].text = MovingIn
  } )

  const showDialog = ( index ) =>
  {
    visibleIndex.value = index
  }

  const hideDialog = () =>
  {
    visibleIndex.value = null
  }

  const formatText = ( text ) =>
  {
    const paragraphs = text.split( '\n' );
    return paragraphs;
  }
</script>
