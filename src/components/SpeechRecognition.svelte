<script>
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const startRecognition = new SpeechRecognition();
  var speechContent = ''

  startRecognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    speechContent = transcript;
    readOutLoud(transcript);
  };

  const speechRecognitionStart = () => {
    startRecognition.start();
  }

  const readOutLoud = (mess) => {
    const apps = ['YouTube', 'LinkedIn', 'linkedin', 'GitHub' , 'medium', 'Twitter']
  	const arrSplit = mess.split(' ');
    const userLang = navigator.language || navigator.userLanguage ;

    if (userLang != 'en-US') return alert('Sorry, Language is not yet supported: ' + userLang + '. Please Browser set language in English (United States).')

    const searchContent = {
      appName: arrSplit[0],
      content: arrSplit.slice(1).join(' ')
    }

    apps.forEach(app => {
      if (searchContent.appName == app && searchContent.content) {
        const searchUrl = `https://${app}.com/search?q=${searchContent.content}`
        window.open(searchUrl)
      } else if (searchContent.appName == app) {
        const searchUrl = `https://${app}.com`
        window.open(searchUrl)
      }
    })
  };
</script>

<p class="text-center italic mt-4">Example, 'Youtube' or 'Youtube champions league'. (Only works on YouTube, LinkedIn, GitHub, Medium and Twitter yet.) (Try in Chrome for best results.)</p>

<div class="flex justify-center p-6"> 
  <div class="p-3 bg-slate-600 hover:scale-125 duration-300 cursor-pointer rounded-full">
    <svg on:click={speechRecognitionStart} class="h-8 w-8 fill-white hover:fill-current hover:text-red-700 duration-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 352c53.03 0 96-42.97 96-96v-160c0-53.03-42.97-96-96-96s-96 42.97-96 96v160C96 309 138.1 352 192 352zM344 192C330.7 192 320 202.7 320 215.1V256c0 73.33-61.97 132.4-136.3 127.7c-66.08-4.169-119.7-66.59-119.7-132.8L64 215.1C64 202.7 53.25 192 40 192S16 202.7 16 215.1v32.15c0 89.66 63.97 169.6 152 181.7V464H128c-18.19 0-32.84 15.18-31.96 33.57C96.43 505.8 103.8 512 112 512h160c8.222 0 15.57-6.216 15.96-14.43C288.8 479.2 274.2 464 256 464h-40v-33.77C301.7 418.5 368 344.9 368 256V215.1C368 202.7 357.3 192 344 192z"/></svg>
  </div>
</div>

<p class="text-center">{speechContent}</p>
