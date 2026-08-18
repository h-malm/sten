<template>
	<div>
		<h3>Sten's Stopwatch</h3>
		<div class="stopwatch">
			<img src="../assets/stopwatch.png">
		</div>
		<div id="time">{{ formattedTime }}</div>
		<button @click="start" class="start-button">{{
			stopOrContinue }}</button>
		<button @click="stop" class="stop-button">STOP</button>
		<button @click="reset" class="reset-button">RESET</button>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

let clock = ref( 0 );
let interval = ref( null );
let offset = ref( 0 );
let stopOrContinue = ref( 'START' );

const formattedTime = ref( 'HH:MM:SS' );
const formattedHours = ref( 'HH' );
const formattedMinutes = ref( 'MM' );
const formattedSeconds = ref( 'SS' );

function update () {
	// Updates the timer with time that has passed
	clock.value += calculateElapsedTime();
	render();
}

function render () {
	let seconds = Math.floor( clock.value / 1000 );
	let minutes = Math.floor( seconds / 60 );
	let hours = Math.floor( minutes / 60 );

	// Seconds and minutes can be incremented [0,59]
	seconds = seconds % 60;
	minutes = minutes % 60;

	// Rounds hours down, then converts them to text, then adds a zero if it is a single digit
	formattedHours.value = String( Math.floor( hours ) ).padStart( 2, '0' );

	// Rounds minutes down, then converts them to text, then adds a zero if it is a single digit
	formattedMinutes.value = String( Math.floor( minutes ) ).padStart( 2, '0' );

	// Rounds seconds down, then converts them to text, then adds a zero if it is a single digit
	formattedSeconds.value = String( Math.floor( seconds ) ).padStart( 2, '0' );

	// Hours, minutes, and seconds into a ref to be displayed
	formattedTime.value = `${formattedHours.value}:${formattedMinutes.value}:${formattedSeconds.value}`;
}

function start () {
	// Checks that timer is not running
	if ( interval.value === null ) {
		// Initializes a time
		offset.value = Date.now();

		// Updates time every 10ms
		interval.value = setInterval( update, 10 );

		// Set label to START as the timer starts running
		stopOrContinue.value = 'START';
	}
}

function stop () {
	// Checks that timer is running
	if ( interval.value ) {
		// Stops the interval and resets the reference
		clearInterval( interval.value );
		interval.value = null;

		// Set label to CONTINUE as the timer is stopped
		stopOrContinue.value = 'CONTINUE';
	}
}

function reset () {
	// Resets the timer
	clock.value = 0;

	// Re-renders the timer as 00:00:00
	render();
	stop();

	// Set label to START because timer is reset
	stopOrContinue.value = 'START';
}

function calculateElapsedTime () {
	// Calculates how much time has elapsed since previous update
	let now = Date.now();
	let d = now - offset.value;

	// Set offset to the current time, working as a starting point for the next calculation
	offset.value = now;

	// Return the elapsed time
	return d;
}

onMounted( () => {
	reset();
} );
</script>
