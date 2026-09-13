<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Kode+Mono:wght@400..700&family=Kranky&family=Nanum+Gothic+Coding&display=swap"
    rel="stylesheet">
  <link rel="icon" :href="favIcon" type="image/x-icon">
  <span class="container"></span>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import favIcon from '/src/assets/images/iconofrock.jpeg'
import { onMounted } from "vue";

( function BlodCursor () {

  var color = "#8d0801"
  var particles = [];

  function init () {
    bindEvents();
    loop();
  }

  function bindEvents () {
    document.addEventListener( 'mousemove', onMouseMove );
  }

  let cursor = {
    x: 0,
    y: 0
  };

  const minDripInterval = 1000;
  const maxDripInterval = 6000;

  function drip () {

    addDrop( cursor.x, cursor.y );

    const delay =
      minDripInterval +
      Math.random() * ( maxDripInterval - minDripInterval );

    setTimeout( drip, delay );
  }

  function onMouseMove ( e ) {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
  }

  onMounted( () => {
    init();
    drip();
  } );


  function addDrop ( x, y ) {
    var drop = new Drop();
    drop.init( x, y );
    particles.push( drop );
  }

  function updateParticles () {

    for ( var i = 0; i < particles.length; i++ ) {
      particles[i].update();
    }

    for ( var i = particles.length - 1; i >= 0; i-- ) {
      if ( particles[i].life < 0 ) {
        particles[i].die();
        particles.splice( i, 1 );
      }
    }

  }

  function loop () {
    requestAnimationFrame( loop );
    updateParticles();
  }

  /**
   * Particles
   */

  function Drop () {

    this.life = 120;
    this.init = function ( x, y ) {
      this.x = x;
      this.y = y;

      this.velocityY = 0
      this.velocityX = ( Math.random() - 0.5 ) * 0.5;

      this.size = Math.random() * 5 + 5;

      this.element = document.createElement( "span" );

      this.element.style.position = "absolute";
      this.element.style.width = this.size + "px";
      this.element.style.height = ( this.size * 1.5 ) + "px";
      this.element.style.background = color;
      this.element.style.borderRadius = "90% 90% 50% 50%";
      this.element.style.pointerEvents = "none";
      this.element.style.willChange = "transform";

      document.querySelector( ".container" ).appendChild( this.element )
      this.update();
    }

    this.update = function () {
      this.velocityY += 0.1;

      this.x += this.velocityX;
      this.y += this.velocityY;
      this.life--;

      const scale = Math.min( 1, this.life / 20 )

      this.element.style.transform = `translate3d(${this.x}px, ${this.y}px, 0) scale(${scale})`;
    };

    this.die = function () {
      this.element.remove();
    };

  }
  init()
} )();
</script>
