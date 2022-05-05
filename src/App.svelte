<script>
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
	}
</script>


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