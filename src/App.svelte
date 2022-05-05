<script>
	import { Router, Link, Route } from "svelte-navigator";
	import SurveyJoin from "./components/SurveyJoin.svelte";
	import { navigate } from "svelte-navigator";
	import Surveys from "./components/Surveys.svelte";
	import Github from './components/Github.svelte';
	import StackOverflow from './components/StackOverflow.svelte';

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

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>