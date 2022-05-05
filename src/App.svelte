<script>
	import SpeechRecognition from './components/SpeechRecognition.svelte';
	import { Router, Link, Route } from "svelte-navigator";
	import SurveyJoin from "./components/SurveyJoin.svelte";
	import { navigate } from "svelte-navigator";
	import Surveys from "./components/Surveys.svelte";
	import GoogleKeep from './components/GoogleKeep.svelte';
	import Github from './components/Github.svelte';
	import StackOverflow from './components/StackOverflow.svelte';
	import Linkedin from './components/Linkedin.svelte';
	import Twitter from './components/Twitter.svelte';
	import Medium from './components/Medium.svelte';
	import YouTube from './components/YouTube.svelte';
	import GoogleCalendar from './components/GoogleCalendar.svelte';
	import GoogleGmail from './components/GoogleGmail.svelte';
	import GoogleDrive from './components/GoogleDrive.svelte';
	import GoogleMaps from './components/GoogleMaps.svelte';

	function goToSurvey() {
		navigate("/surveys")
	let cardSettigns = {
		classContainer : 'flex flex-col flex-column md:flex-row md:max-w-sm rounded-lg bg-gray-100 shadow-md',
		classImg : 'w-full h-14 w-14 md:h-14 object-contain md:w-14 ml-2 mb-3 ',
		classInput : 'form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 hover:border-blue-600 focus:outline-none',
		classButton : 'btn inline-block px-6 py-2.5 bg-gray-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out flex items-center'
	}
</script>

<SpeechRecognition />

<Router>
	<main>
	  <Route path="/">
		<SurveyJoin on:surverJoin={goToSurvey}/>
	  </Route>
  
	  <Route path="surveys">
		<Surveys />
	  </Route>
	</main>
  </Router>
	<Github {cardSettigns}/>
	<StackOverflow {cardSettigns}/>
	<Twitter {cardSettigns}/>
	<Linkedin {cardSettigns}/>
	<Medium {cardSettigns}/>
	<YouTube {cardSettigns}/>
	<GoogleKeep {cardSettigns}/>
	<GoogleGmail {cardSettigns}/>
	<GoogleCalendar {cardSettigns}/>
	<GoogleDrive {cardSettigns}/>
	<GoogleMaps {cardSettigns}/>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>