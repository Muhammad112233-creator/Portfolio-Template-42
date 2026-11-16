<template>
  <footer class="relative pb-container overflow-hidden pointer-events-none">
    <div class="mb-[10vh] overflow-hidden italic pt-[10vh] xl:pt-[20vh]">
      <div class="relative flex overflow-hidden text-[3rem] xl:text-[1.8rem] font-light whitespace-nowrap">
        <div class="relative animate-marquee-slow py-12 whitespace-nowrap flex items-center">
          <div class="flex items-center" v-for="n in 4" :key="'a'+n">
            <span class="mx-8">digital</span><span class="mx-8">•</span>
            <span class="mx-8">realities</span><span class="mx-8">•</span>
            <span class="mx-8">sculpting</span><span class="mx-8">•</span>
            <span class="mx-8">tactile</span><span class="mx-8">•</span>
            <span class="mx-8">physics</span><span class="mx-8">•</span>
          </div>
        </div>
        <div class="absolute top-0 animate-marquee-slow2 py-12 whitespace-nowrap flex items-center">
          <div class="flex items-center" v-for="n in 4" :key="'b'+n">
            <span class="mx-8">digital</span><span class="mx-8">•</span>
            <span class="mx-8">realities</span><span class="mx-8">•</span>
            <span class="mx-8">sculpting</span><span class="mx-8">•</span>
            <span class="mx-8">tactile</span><span class="mx-8">•</span>
            <span class="mx-8">physics</span><span class="mx-8">•</span>
          </div>
        </div>
      </div>
    </div>

    <div class="grid-w mb-[5vh] xl:mb-[1vh] overflow-hidden">
      <div class="col-span-full xl:col-start-2 xl:col-span-10 text-[3rem] md:text-[5rem] xl:text-[5rem] w-auto">
        <h2 class="flex font-light leading-[100%] tracking-[-0.1rem] lowercase overflow-hidden flex-wrap">
          <span class="js-ready inline-flex uline-forever">ready</span><span class="js-ready inline-flex">&nbsp;to start your</span>
        </h2>
        <div class="overflow-hidden xl:-mt-10">
          <h2 class="font-light leading-[120%] tracking-[-0.1rem] lowercase">
            <span class="js-ready inline-flex">next digital</span><span class="js-ready inline-flex">&nbsp;experience?</span>
          </h2>
        </div>
      </div>
      <div class="col-span-full xl:col-start-2 xl:col-span-5 mt-6 xl:mt-8 pb-container">
        <NuxtLink to="/contact" data-cursor-magnetic class="group inline-flex items-center gap-x-2 relative overflow-hidden px-6 py-2 border-2 bg-black/7 border-black rounded-full w-max pointer-events-auto">
          <span class="text-[1.8rem] md:text-[3rem] xl:text-[1.8rem] font-light lowercase block px-6 py-4">
            <span class="inline-flex items-center gap-[0.35em] whitespace-nowrap relative">
              <span class="leading-none">get in touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="w-[1em] h-[1em] shrink-0"><line x1="5" y1="5" x2="15" y2="15" stroke="currentColor" stroke-width="1.5"/><polyline points="5,15 15,15 15,5" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
            </span>
          </span>
        </NuxtLink>
      </div>
    </div>

    <div class="grid-w p-container leading-[140%] text-[3rem] xl:text-[1.8rem]">
      <div class="col-span-full xl:col-start-2 xl:col-span-4 overflow-hidden mb-5 xl:mb-0">
        <div class="text-[1.8rem] font-light lowercase flex items-center italic leading-[120%] overflow-hidden">
          <h3 class="xl:hidden inline whitespace-nowrap uppercase">pk-l:</h3>
          <h3 class="hidden xl:inline whitespace-nowrap">lahore, pakistan:</h3>
          <div class="ml-2 flex items-center tabular"><span class="inline uppercase px-5">({{ time }})</span></div>
        </div>
      </div>
      <div class="col-span-full xl:col-start-6 xl:col-span-4 flex gap-8 pointer-events-auto">
        <a href="https://instagram.com" target="_blank" rel="noopener" class="hover:text-blue">In,</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener" class="hover:text-blue">Li,</a>
        <a href="https://behance.net" target="_blank" rel="noopener" class="hover:text-blue">Be,</a>
        <a href="https://github.com" target="_blank" rel="noopener" class="hover:text-blue">Gh</a>
      </div>
      <div class="col-span-full xl:col-start-12 xl:col-span-4 flex xl:justify-end pointer-events-auto">
        <button class="hover:text-blue" @click="toTop">back to top ↗</button>
      </div>
    </div>
    <div class="grid-w p-container text-[1.4rem] font-light lowercase opacity-60">
      <div class="col-span-full xl:col-start-2 xl:col-span-10 flex flex-col xl:flex-row justify-between gap-4">
        <p>any reproduction without permission is prohibited.</p>
        <p>design, develop / by ak. arham khan</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const time = ref('00 : 00')
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
onMounted(() => {
  const tick = () => {
    time.value = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit' }).replace(':', ' : ')
  }
  tick(); setInterval(tick, 30000)
})
</script>
