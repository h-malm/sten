<template>
	<div class="homepage" :class="{ 'overlay-active': isOverlayActive }">
		<img src="../assets/UI-components/flowers-top.png" />
		<div class="overlay" v-if=" isOverlayActive "></div>
		<div class="home-nav-container">
			<div>
				<img src="/src/assets/images/iconofrock.jpeg" id="website-icon" />
			</div>
			<div>
				<h2 class="page-header">Sten</h2>
			</div>
			<Navbars />
		</div>
		<div class="home-content-container">
			<div id="left-panel">
				<Calendar />
				<div id="interests">
					<h3>
						What's currently on Sten's brain
					</h3>
					<p class="covered-by-your-grace-regular">
						⊹ Autumn
						<br>
						⊹ NCT Dream
						<br>
						⊹ Apples and cinnamon
						<br>
						⊹ The job market
					</p>
				</div>
				<Stopwatch id="stopwatch" />
				<div id="gifs">
					<img class="gifs" src="/src/assets/UI-components/bestonphone.gif" />
				</div>
			</div>
			<div id="main-content">
				<h1>Welcome to Sten</h1>
				<p class="paragraph">
					This website is a personal website used to collect stuff I've made into one place! That
					includes horror stories I've written, stuff I've made like knitting and baking, and stuff
					I've learned, experienced, or thought about.
				</p>
				<img src="/src/assets/UI-components/panorama1.png" class="panorama" />
				<h2 class="subheaders-right">About Sten</h2>
				<p class="paragraph">
					I'm a 24-year-old Computer Engineer (I got a 4 out of 5 for my Master's
					thesis. One could say I am fairly fucking proud). My Master's thesis discussed the evolution
					of website design, focusing on layout, colors, navigation, and visualized interactivity.
				</p>
				<p class="paragraph">
					Can't say it was anything special. I did not reach the depth of research I would have
					wanted to. Still, I learned a lot from it. It definitely peaked my interest in accessibility,
					usability, and global website design trends.
				</p>
				<img src="/src/assets/UI-components/panorama2.png" class="panorama" />
				<h2 class="subheaders-left">Why make a website?</h2>
				<p class="paragraph">
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
				<img src="/src/assets/UI-components/panorama3.png" class="panorama" />
				<h2 class="subheaders-right">Guide to Sten's website</h2>
				<p class="paragraph">
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
				<p class="paragraph">
					There are horror stories I've written under <i>Content > Horror</i>, plant tips
					under <i>Content > Plant Tips</i>, and so on. There are also recipes and a page for
					stuff I have made, such as woodwork, sewing, and drawing. One page is
					dedicated to posting pictures I have taken, so it may load a bit slowly as it
					renders a
					bunch of images all at once (because I can't be bothered to try to make up
					categories
					and sort them).
				</p>
				<p class="paragraph">
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
				<p class="paragraph">
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
				<img src="/src/assets/UI-components/panorama4.png" class="panorama" />
				<h2 class="subheaders-left">What does Sten like and dislike?</h2>
				<p class="paragraph">
					You want to get to know me moore~? Well, since you're so curious, I
					like all stuff creative, including drawing, pottery, and painting. I also like building
					stuff, which means I like woodworking, knitting, home-making, and sewing. I
					love problem-solving, which makes living alone easy as pie. If something's wrong
					in my apartment or I'm missing something, I'll fix it by looking up the manual or
					finding a video about it, or I'll DIY the thing I'm missing. Some people
					may prefer to save time and spend money by paying someone else to fix or make
					something for them, and I understand that. It's just not my style. Problem-solving is
					something that really makes me happy because it always results in a feeling of accomplishment and
					self-sufficiency. And I learn something new!
				</p>
				<p class="paragraph">
					I love a challenge. And by keeping an abundance
					of plants, I have something that shows both progression from my hard-work and
					something that gives me something back, like oxygen and hopefully vegetables.
				</p>
				<p class="paragraph">
					Dude, I
					looove everything horror. I consume
					horror-stories and videos on the daily. In spite of this, I get easily scared.
					House-fires are my
					deepest fears (along with tics, deer flies, snakes, and joblessness. I had to look up the
					English word for "deer fly", and the detailed images that Google showed me is enough
					to give
					me nightmares for days. I'm never never going out into the woods again).
				</p>
				<p class="paragraph">
					I study in a field of predominantly men. My class had three girls out of
					around 50 people. Can't say there is much different than a women-dominated field.
					You see, drama isn't exclusive to groups of girls, cause there's been a bunch of
					drama in the last year of our studies, all originating from guys. I thought
					drama would disappear as people became adults, but I guess not.
				</p>
				<p class="paragraph">
					I already said I don't like bugs, but I equally much do not like people who clearly value
					friends based on social groups. Loyalty, however cliché it may sound, is
					important. It's insane how much people play fast and loose with friendships just to
					satisfy their needs or to find popularity. I don't like fake friends. Fake friends
					can eat a dick. Then they can go hang out with other fake people (who can also eat a
					dick).
				</p>
				<p class="paragraph">
					Whew! There's a lot more text than I thought there'd be. Apparently, I'm a yapper in
					text-form.
				</p>
				<p class="paragraph">Anyways, enjoy the page and lmk if you hate it <3 </p>
			</div>
			<div id="right-panel">
				<div>
					<div class="profile">
						<h3>𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃</h3>
						<h3>STEN </h3>
						<h3>𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃</h3>
						<div class="portrait-image">
							<img src="/src/assets/UI-components/portrait-dithered.png" class="dithered" />
							<img src="/src/assets/UI-components/portrait.jpg" class="undithered" />
						</div>
					</div>
					<div class="bio">
						24 ⋆ frontend dev ⋆ she/her
					</div>
				</div>
				<div id="musicplayer">
					<h3 class="covered-by-your-grace-regular">Lately, Sten's been listening to:</h3>
					<iframe id="musicframe" width="90%" height="20rem" scrolling="no" frameborder="no"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2253490541&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
					</iframe>
					<iframe id="musicframe" width="90%" height="20rem" scrolling="no" frameborder="no"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A319564427&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
					</iframe>
					<iframe id="musicframe" width="90%" height="20rem" scrolling="no" frameborder="no"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2286756479&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
					</iframe>
					<iframe id="musicframe" width="90%" height="20rem" scrolling="no" frameborder="no"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A385433897&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
					</iframe>
					<iframe id="musicframe" width="90%" height="20rem" scrolling="no" frameborder="no"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1436136427&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
					</iframe>

					<iframe id="musicframe" width="90%" height="20rem" scrolling="no" frameborder="no"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A705970902&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
					</iframe>
					<iframe id="musicframe" width="90%" height="20rem" scrolling="no" frameborder="no"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A278689076&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
					</iframe>
					<iframe id="musicframe" width="90%" height="20rem" scrolling="no" frameborder="no"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1247364829&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
					</iframe>
				</div>
				<div class="oldman">
					<img v-on:click="toggleImage" :src="activeImage" alt="A Lightswitch" class="lightswitch">
					<img loading="lazy" :src="oldManActiveImage" alt="An old man reading the newspaper">
					This is the reading nook. Here, you are to read. So pick up a book, news paper, magazine, or
					fire
					up
					a webtoon/manga on your phone, and take a few minutes to immerse yourself in another world. Read
					it
					as if you were a side character without significance. Aim to understand the world as it is
					written,
					and avoid connecting that world to your own real world. Try to let go of chores, obligations,
					and
					every project that could be done or started, and let the absence of responsibilites in fiction
					seep
					into you.
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Calendar from '@/components/Calendar.vue';
import Navbars from '../components/Navbars.vue';
import image1 from '/src/assets/images/thumbnail_IMG_1003.png';
import image2 from '/src/assets/images/thumbnail_IMG_1005.png';
import oldMan1 from '/src/assets/UI-components/lightson.gif';
import oldMan2 from '/src/assets/UI-components/lightsoff.gif';
import Stopwatch from '../components/Stopwatch.vue';
import { ref } from 'vue';

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

</script>
