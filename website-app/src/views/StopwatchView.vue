<template>
    <div class="silkscreen-regular frame">
        <h1 class="silkscreen-regular page-header text-shadow">Stopwatch</h1>
        <div class="time">
            <div class="stopwatch">{{ formattedTime }}</div>
            <button class="start-button" @click=" start ">{{
                stopOrContinue }}</button>
            <button class="stop-button" @click=" stop ">STOP</button>
            <button class="reset-button" @click=" reset ">RESET</button>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    let clock = ref( 0 );
    let interval = ref( null );
    let offset = ref( 0 );
    let stopOrContinue = ref( 'START' );

    const formattedTime = ref( '00:00:00' );

    function update () {
        clock.value += calculateElapsedTime();
        render();
    }

    function render () {
        let seconds = Math.floor( clock.value / 1000 );
        let minutes = Math.floor( seconds / 60 );
        let hours = Math.floor( minutes / 60 );

        seconds = seconds % 60;
        minutes = minutes % 60;

        formattedTime.value = `${ String( Math.floor( hours ) ).padStart( 2, '0' ) }:${ String( Math.floor( minutes ) ).padStart( 2, '0' ) }:${ String( Math.floor( seconds ) ).padStart( 2, '0' ) }`;
    }

    function start () {
        if ( !interval.value ) {
            stopOrContinue.value = 'START';
            offset.value = Date.now();
            interval.value = setInterval( update, 10 );
        }
    }

    function stop () {
        if ( interval.value ) {
            clearInterval( interval.value );
            interval.value = null;
            console.log( 'stopped' )
            stopOrContinue.value = 'CONTINUE';
        }
    }

    function reset () {
        stopOrContinue.value = 'START';
        clock.value = 0;
        render();
        stop();
    }

    function calculateElapsedTime () {
        let now = Date.now();
        let d = now - offset.value;
        offset.value = now;
        return d;
    }

    onMounted( () => {
        reset();
    } );
</script>
