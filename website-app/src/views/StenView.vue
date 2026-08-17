<template>
	<div class="lekton-regular homepage" :class="{ 'overlay-active': isOverlayActive }">
		<img src="../assets/forrest-dithered-top.png" />
		<img loading="lazy" :src="oldManActiveImage" alt="An old man reading the newspaper" class="oldman">
		<img v-on:click="toggleImage" :src="activeImage" alt="A Lightswitch" class="lightswitch">
		<div class="overlay" v-if=" isOverlayActive "></div>
		<div class="home-nav-container">
			<div>
				<img src="/src/assets/images/iconofrock.jpeg" id="website-icon" />
			</div>
			<div>
				<h1 class="silkscreen-regular page-header">Sten</h1>
			</div>
			<Navbars />
		</div>
		<div class="home-content-container">
			<div id="left-panel">
				<div class="section" id="calendar">
					<div class="calendar lekton-regular">
						<div class="calendar-header tiny5-regular">
							<div id="month-year"></div>
						</div>
						<div class="calendar-body">
							<div class="calendar-weekdays">
								<div>M</div>
								<div>T</div>
								<div>W</div>
								<div>T</div>
								<div>F</div>
								<div>S</div>
								<div>S</div>
							</div>
							<div class="calendar-dates">
							</div>
						</div>
					</div>
				</div>
				<Stopwatch />
				<div id="gifs">
					<img class="gifs" src="/src/assets/bestonphone.gif" />
					<img class="gifs" src="/src/assets/neocities.gif" />
					<img class="gifs" src="/src/assets/geocities.gif" />
				</div>
			</div>
			<div id="main-content">
				<p>
					This website is a personal website used to collect stuff I've made into one place! That
					includes horror stories I've written, stuff I've made like knitting and baking, and stuff
					I've
					learned, e.g. some Korean.
				</p>
				<p>
					The main purpose of this website was to practice my website-making skills, and that is why
					it
					is made using Vue (I'm hoping to work with Vue in the future). Feel
					free
					to roam around and explore. There's not gonna be a whole lot of content since I only
					recently
					implemented this website, but I look forward to filling it with my creative work!
				</p>
				<h1 class="about-header">ABOUT ME</h1>
				<div>
					<div class="about-me-container">
						<img src="/src/assets/reading.gif" class="reading-gif" />
						<p>
							I'm a 24-year-old Computer Engineering student. I got a 4 out of 5 for my Master's thesis.
							One
							could
							say
							I am pretty fucking proud). My Master's thesis
							discussed the
							evolution of website design, focusing on
							layout,
							colors, navigation, and
							visualized interactivity. </p>
					</div>
					<p>Can't say it was anything special. I did not really reach
						the
						depth of research I would have wanted to. Still, I learned a lot from it. It definitely
						peaked my interest in accessibility, usability, and global website design trends.
					</p>
				</div>
				<br />
				<h1>What does Sten like and dislike?</h1>
				<p>
					You want to get to know me moore~? Well, since you're so curious, I
					like creative stuff, such as drawing, pottery, and painting. I also like building
					stuff, which means I like woodworking, knitting, home-making, and sewing. I
					love problen-solving, which makes living alone easy as pie. If something's wrong
					in my apartment or I'm missing something, I'll fix it by looking up the manual or
					finding a video about it, or I'll DIY the thing I'm missing. Some people
					may prefer to save time and spend money by paying someone else to fix or make
					something for them, and I understand that. It's just not my style. Problem-solving
					is
					something that really makes me happy because it always results in a feeling of
					accomplishment and self-sufficiency. And I learn something new!
				</p>
				<br />
				<p>
					I love a challenge. And by keeping an abundance
					of plants, I have something that shows both progression from my hard-work and
					something that gives me something back, like oxygen and hopefully vegetables.
				</p>
				<br />
				<p>
					Dude, I
					looove everything horror. I consume
					horror-stories and videos on the daily. In spite of this, I get easily scared.
					House-fires are my
					deepest fears (along with tics, deer flies, snakes, and joblessness. I had to look up the
					English word for "deer fly", and the detailed images that Google showed me is enough
					to give
					me nightmares for days. I'm never never going out into the woods again).
				</p>
				<br />
				<p>
					I study in a field of predominantly men. My class had three girls out of
					around 50 people. Can't say there is much different than a women-dominated field.
					You see, drama isn't exclusive to groups of girls, cause there's been a bunch of
					drama in the last year of our studies, all originating from guys. I thought
					drama would disappear as people became adults, but I guess not.
				</p>
				<br />
				<p>
					I already said I don't like bugs, but I equally much do not like people who clearly value
					friends based on social groups. Loyalty, however cliché it may sound, is
					important. It's insane how much people play fast and loose with friendships just to
					satisfy their needs or to find popularity. I don't like fake friends. Fake friends
					can eat a dick. Then they can go hang out with other fake people (who can also eat a
					dick).
				</p>
				<br />
				<h1>Why make a website?</h1>
				<p>
					Actually, the initial point of this website was to make something to show my
					development and design skills when I apply for jobs. Since,
					my main interest within IT is frontend, usability, and accessibility in website
					design, making a website seemed like
					the most obvious first step. But to make a website, I had to consider what tools to
					use. I previously made a very basic website using almost only HTML and CSS (and it
					looked like absolute dog shit). I have worked with Vue during my work at this one company (they
					make
					a
					bunch of stuff for a bunch of screens for a bunch of different
					customers) and I got to rewrite some of their pages using Vue. It was a great
					learning experience and that is why this website is implemented using Vue. I
					seriously considered working with React, as I have programmed a website for a course
					using it and it's a <i>very popular</i> library. However, Vue is more lightweight
					and easier
					to maintain. React did feel a bit overkill for a
					personalized website with blog-like content.
				</p>
				<br />
				<h1>Guide to Sten's website</h1>
				<p>
					A little guide for this website might be good :) I was inspired by the 90s
					websites when the computer screens were much smaller (I'm implementing the website
					using
					my 3440x1440 monitor so I just simulate the struggle of having a smaller screen). I
					love love LOVE the visual of 8-bit games and design, so obviously that's how I
					decided to design my website. The name of the website and the navigation bar is
					placed at the top of the screen. Obviously my name isn't Sten. I'd rather not put
					any personal info here. You never know what websites are scraped for data to train
					AI models.
				</p>
				<br />
				<p>
					There are horror stories I've written under <i>Content > Horror</i>, plant tips
					under <i>Content > Plant Tips</i>, and so on. If you happen to be a native Korean
					speaker,
					please do not judge my short Korean texts on the <i>Korean Practices</i> page too
					harshly. I'm still new to writing Korean. There are also recipes and a page for
					stuff I have made, such as woodwork, sewing, and drawing. One page is
					dedicated to posting pictures I have taken, so it may load a bit slowly as it
					renders a
					bunch of images all at once (because I can't be bothered to try to make up
					categories
					and sort them).
				</p>
				<br />
				<p>
					I'd say my website is majorly focused on reading, so if you're not interested in
					that, I'd like to suggest that you get
					off my
					website instead of talking shit about how it is a bad website because it has too
					much
					text. My website just is not made for your teeny tiny attention span and that's okay. You don't
					have
					to
					be here :)
				</p>
				<br />
				<p>
					It's worth noting that this page isn't made to be viewed on a small screen, such as
					a
					phone, and won't look great in that format. But also, who browses through
					websites on their phone? It's definitely the worst method for navigating a website.
					No
					mouse. Just rawdogging a touchscreen by navigating through a bunch of nested lists
					and
					dropdown menus. Wym, you don't understand what I'm talking about?
					That's what websites do when they make a mobile version: simplify
					the
					design by
					pushing stuff into icons and dropdown menus to save screen-space. They don't realize
					that navigating through such a website is arguably more of a pain in the neck than
					having a bunch of functionality readily available on the page where it can be easily
					spotted and clicked on. This rant may or may not be fueled by some of the research I
					did for my Master's and I think it is a valuable point, but I digress for now.
				</p>
				<br />
				<p>
					Whew! There's a lot more text than I thought there'd be. Apparently, I'm a yapper in
					text-form.
				</p>
				<br />
				<p>Anyways, enjoy the page and lmk if you hate it <3 </p>
			</div>
			<div id="right-panel">
				<div>
					<p>STEN (me)</p>
					<div class="profile">
						<div class="portrait-image">
							<img src="/src/assets/portrait-dithered.png" class="dithered" />
							<img src="/src/assets/portrait.jpg" class="undithered" />
						</div>
					</div>
					<p>
						24 ⊹ Frontend Dev ⊹ she/her
					</p>
				</div>
				<div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import image1 from '/src/assets/images/thumbnail_IMG_1003.jpg';
import image2 from '/src/assets/images/thumbnail_IMG_1005.jpg';
import Navbars from '../components/Navbars.vue';
import oldMan1 from '/src/assets/lightson.gif';
import oldMan2 from '/src/assets/lightsoff.gif';
import { ref, onMounted } from 'vue';
import Stopwatch from '../components/StopwatchView.vue';

const activeImage = ref( image1 );
const oldManActiveImage = ref( oldMan1 )
const isOverlayActive = ref( false );

function toggleImage () {
	// Switch between gifs of the old man reading/not reading and the lightswitch on/off
	activeImage.value = activeImage.value === image1 ? image2 : image1;
	oldManActiveImage.value = oldManActiveImage.value === oldMan1 ? oldMan2 : oldMan1;
	// Add an overlay over the page to simulate "turning off the lights"
	isOverlayActive.value = !isOverlayActive.value;
}

onMounted( () => {
	const calendarDates = document.querySelector( '.calendar-dates' );
	const monthYear = document.getElementById( 'month-year' );

	let currentDate = new Date();
	let currentMonth = currentDate.getMonth();
	let currentYear = currentDate.getFullYear();

	const months = [
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];

	function renderCalendar ( month, year ) {
		monthYear.textContent = `${months[month]} ${year}`;

		// Get today's date
		const today = new Date();

		// Gets the weekday by number, i.e. Wednesday returns 3.
		const firstDay = new Date( year, month, 0 ).getDay();

		// Gets the number of days in the month 
		const daysInMonth = new Date( year, month + 1, 0 ).getDate();

		// Insert blank spaces for the weekdays before the first date of the month 
		for ( let i = 0; i < firstDay; i++ ) {
			const blank = document.createElement( 'div' );
			calendarDates.appendChild( blank );
		}

		// Create the days of the month as divs 
		for ( let i = 1; i <= daysInMonth; i++ ) {
			const day = document.createElement( 'div' );
			day.textContent = i;

			// Highlight today's date 
			if (
				i === today.getDate() &&
				month === today.getMonth() &&
				year === today.getFullYear()
			) {
				day.classList.add( 'current-date' );
			}

			calendarDates.appendChild( day );
		}
	}

	renderCalendar( currentMonth, currentYear );
} )
</script>
