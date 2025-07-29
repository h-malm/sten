<template>
  <div class="loadingscreen">
    <div class="loader bytesized-regular">Loading Sten's website...</div>
  </div>
</template>

<script>
  export default {
    mounted ()
    {
      setTimeout( () =>
      {
        this.$el.style.display = 'none'
      }, 2000 )
    },
  }
</script>
