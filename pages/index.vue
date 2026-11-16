<template>
  <div class="index">
    <!-- loader -->
    <div class="loader js-loader">
      <div class="loader-bg js-loader-bg" />
      <div class="loader-no js-loader-no"><span class="js-no">0</span></div>
    </div>
    <div class="loader-line js-loader-line" />
    <div class="loader-line js-scrollbar-line" style="transform-origin:top" />

    <div class="scroll-indicator js-scroll"><div class="scroll-mouse-body" /></div>

    <!-- hero -->
    <div class="relative pb-10 pt-[20vh] xl:pt-[45vh] xl:pb-[calc(55vh-22rem)] w-screen overflow-hidden">
      <div class="fixed h-screen w-screen -translate-y-[20vh] xl:-translate-y-[45vh] overflow-hidden">
        <img src="/images/hero-cover.jpg" alt="" class="kenburns w-full h-full object-cover object-[15%_center] xl:object-center" />
        <div class="absolute inset-0 bg-black/20" />
      </div>
      <div class="grid-w h-full flex flex-col justify-end xl:justify-between xl:mb-50 relative">
        <div class="col-span-full xl:col-span-11 flex flex-col justify-between xl:items-end pointer-events-none">
          <h1 class="js-title text-[4rem] md:text-[8.5rem] xl:text-[13.6rem] pb-container leading-[100%] normal-case font-light xl:tracking-[-0.7rem]">
            <span><span class="block">Creative Developer /</span><span class="block">Motion Designer</span></span>
          </h1>
        </div>
        <div class="col-span-full md:col-start-6 md:col-end-13 xl:col-start-14 xl:col-end-17 xl:-mt-[3.4rem] mb-50">
          <div class="relative w-full aspect-square overflow-hidden will-change" data-cursor-magnetic>
            <img src="/images/portrait.jpg" alt="Arham Khan" class="w-full h-full object-cover" />
          </div>
          <div class="p-container leading-[120%] text-[1.8rem] pointer-events-none normal-case font-light italic">
            <div class="xl:pr-container overflow-hidden text-right"><p class="js-line block w-full opacity-0 will-change">Hi, I'm Arham,</p></div>
            <div class="xl:pr-container overflow-hidden text-right"><p class="js-line block w-full opacity-0 will-change">Focused on Crafting</p></div>
            <div class="xl:pr-container overflow-hidden text-right"><p class="js-line block w-full opacity-0 will-change">Digital Experiences.</p></div>
          </div>
        </div>
      </div>
    </div>

    <!-- reel -->
    <section class="w-screen xl:mb-100 relative">
      <div class="relative w-full h-full" data-cursor-text="Play">
        <div class="relative h-full flex flex-col will-change">
          <div class="relative text-[3rem] leading-[120%] tracking-widest p-container overflow-hidden">
            <div class="text-center overflow-hidden">
              <div class="relative flex whitespace-nowrap select-none overflow-hidden" aria-hidden="true">
                <div class="relative animate-marquee whitespace-nowrap flex items-center shrink-0 min-w-full">
                  <span class="px-4">AK ↘ Showreel &amp; R&amp;D (2026) • ► ► ► ► ► ► • ▷ ▷ ▷ ▷ ▷ ▷ •</span>
                  <span class="px-4">AK ↘ Showreel &amp; R&amp;D (2026) • ► ► ► ► ► ► • ▷ ▷ ▷ ▷ ▷ ▷ •</span>
                </div>
                <div class="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center shrink-0 min-w-full">
                  <span class="px-4">AK ↘ Showreel &amp; R&amp;D (2026) • ► ► ► ► ► ► • ▷ ▷ ▷ ▷ ▷ ▷ •</span>
                  <span class="px-4">AK ↘ Showreel &amp; R&amp;D (2026) • ► ► ► ► ► ► • ▷ ▷ ▷ ▷ ▷ ▷ •</span>
                </div>
              </div>
            </div>
          </div>
          <div class="aspect-[2.0] relative w-full overflow-hidden">
            <figure class="inset-0 origin-bottom overflow-hidden w-full h-full aspect-video cursor-pointer relative">
              <img src="/images/reel.jpg" alt="Showreel" class="kenburns w-full h-full object-cover" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="xl:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 text-white pointer-events-none" fill="currentColor"><circle cx="50" cy="50" r="50" fill="black" fill-opacity="0.35"/><path d="M40 32 L70 50 L40 68 Z" fill="white"/></svg>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- canvas / empowering -->
    <div class="relative flex flex-col items-center justify-center min-h-screen xl:h-[150vh] xl:mt-200">
      <div class="relative flex flex-col items-center justify-center w-full h-full">
        <div class="absolute w-full h-full mask-y"><canvas ref="particles" class="relative w-full h-full overflow-hidden" /></div>
        <div class="relative flex flex-col items-center justify-center w-full h-full px-container pointer-events-none">
          <div class="w-full text-[1.8rem] md:text-[3rem] xl:text-[1.8rem]"><span class="text-left uline-forever">Innovation in action.</span></div>
          <div class="mt-[10vh] w-full">
            <h2 class="text-[5rem] md:text-[9rem] xl:text-[13.6rem] leading-[110%] xl:leading-[130%] font-light xl:tracking-[-0.7rem]">
              <div class="text-left relative block text-center overflow-hidden xl:-mb-50"><div class="js-big-title relative block text-center w-full normal-case select-none backface-hidden">Crafting Ideas</div></div>
              <div class="text-right relative block text-center overflow-hidden xl:-mb-50"><div class="js-big-title relative block text-center w-full normal-case select-none backface-hidden">to Shape</div></div>
              <div class="text-right z-[3] text-shadow-xl relative block text-center overflow-hidden xl:-mb-50"><div class="js-big-title relative block text-center w-full normal-case select-none backface-hidden">Tomorrow</div></div>
            </h2>
          </div>
          <div class="xl:absolute xl:mt-0 xl:px-container mt-[10vh] flex flex-col xl:flex-row items-end xl:items-center justify-between w-full text-[1.8rem] md:text-[3rem] xl:text-[1.8rem] leading-[140%]">
            <div class="relative overflow-hidden"><p class="js-subtitle">Creating Connections</p></div>
            <div class="relative overflow-hidden"><p class="js-subtitle">Building Trust</p></div>
          </div>
          <NuxtLink to="/contact" class="relative mt-[5vh] flex items-center justify-center pointer-events-auto" data-cursor-magnetic>
            <div class="relative flex justify-end items-center p-container overflow-hidden">
              <div class="js-subtitle p-10 rounded-full border-2 border-black bg-black/7 backdrop-blur-md">
                <span class="block text-[1.4rem] md:text-[1.8rem] xl:text-[1.4rem]">
                  <span class="inline-flex items-center gap-[0.35em] whitespace-nowrap relative">
                    <span class="leading-none">Let's design something with impact</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="w-[1em] h-[1em] shrink-0"><line x1="5" y1="5" x2="15" y2="15" stroke="currentColor" stroke-width="1.5"/><polyline points="5,15 15,15 15,5" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
                  </span>
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- imagine marquee -->
    <section class="js-marquee-section w-screen h-[70vh] flex items-center justify-center">
      <div class="overflow-hidden text-[5rem]">
        <div class="grid-w mb-container relative px-container">
          <h2 class="col-start-1 col-span-full text-[3rem] leading-[120%] font-medium">[Let's imagine together]</h2>
        </div>
        <div class="js-marquee flex flex-col" data-cursor-magnetic>
          <div class="js-marquee-row relative flex whitespace-nowrap py-container will-change backface-hidden">
            <div class="js-marquee-col flex items-center justify-center gap-x-4" v-for="col in 2" :key="col">
              <div><span class="leading-[100%] px-container">● Creative ●</span></div>
              <div class="overflow-hidden aspect-square shrink-0" style="width:256px"><img src="/images/tile-abstract.jpg" alt="" /></div>
              <div><span class="leading-[100%] px-container">● Design ●</span></div>
              <div class="overflow-hidden aspect-square shrink-0" style="width:256px"><img src="/images/service-brand.jpg" alt="" /></div>
              <div><span class="leading-[100%] px-container">● Passionate ●</span></div>
              <div class="overflow-hidden aspect-square shrink-0" style="width:256px"><img src="/images/service-film.jpg" alt="" /></div>
              <div><span class="leading-[100%] px-container">● Independent ●</span></div>
              <div class="overflow-hidden aspect-square shrink-0" style="width:256px"><img src="/images/service-immersive.jpg" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- trends / trail -->
    <section class="relative w-screen py-[20vh] overflow-hidden">
      <div class="grid-w">
        <div class="col-span-full xl:col-start-2 xl:col-span-10 text-center">
          <div class="flex items-center justify-center gap-8 text-[5rem] md:text-[9rem] xl:text-[13.6rem] font-light leading-[100%] tracking-[-0.7rem]">
            <span class="js-trend inline-block">Iconic</span>
            <svg class="js-trend w-[0.6em] h-[0.6em] animate-spin" style="animation-duration:8s" viewBox="0 0 100 100" fill="currentColor"><path d="M50 0 L58 42 L100 50 L58 58 L50 100 L42 58 L0 50 L42 42 Z"/></svg>
          </div>
          <div class="js-trend text-[5rem] md:text-[9rem] xl:text-[13.6rem] font-light leading-[100%] tracking-[-0.7rem]">Trends</div>
          <p class="js-trend mt-10 text-[1.8rem] md:text-[3rem] xl:text-[1.8rem] font-light normal-case italic">Bold Visuals.</p>
          <p class="js-trend mt-4 text-[1.4rem] font-light normal-case opacity-70">Building consistent, distinct motion across digital culture.</p>
          <p class="mt-10 text-[1.2rem] tracking-widest opacity-50">(Scroll)</p>
        </div>
      </div>
      <div class="relative h-[60vh] mt-[10vh]">
        <img v-for="(t,i) in trails" :key="i" :src="t" alt="" class="js-trail absolute w-[22rem] h-[28rem] object-cover rounded-xl shadow-2xl" :style="{ left: `${8 + i*11}%`, top: `${(i%3)*12}%`, transform: `rotate(${(i%2? -1:1)*4}deg)` }" />
      </div>
    </section>

    <!-- services -->
    <section class="relative h-auto xl:h-screen">
      <div class="grid-w mb-50 normal-case text-[1.8rem] leading-[120%]">
        <div class="col-span-full xl:col-span-5 py-container overflow-hidden text-[3rem] md:text-[5rem] xl:text-[3rem]"><h2 class="js-header">● services</h2></div>
        <div class="col-span-full xl:col-span-5 py-container overflow-hidden font-light leading-[100%] md:text-[3rem] xl:text-[1.8rem]"><p class="js-header-text w-full">Great brands grow when every touchpoint feels intentional and alive.</p></div>
        <div class="col-span-full xl:col-span-6 text-left xl:text-right py-container overflow-hidden md:text-[3rem] xl:text-[1.8rem]"><p class="uline-forever">Discover where ideas take form</p></div>
      </div>

      <div class="mb-100 hidden xl:block">
        <div class="js-services grid-w relative items-start mt-100">
          <div class="flex flex-col items-start col-start-3 col-end-10 text-[3rem] xl:text-[5rem] font-light leading-[120%] mb-100 mt-100">
            <h3 v-for="(s,i) in services" :key="s.title" class="js-service-title w-full font-light leading-[140%] whitespace-nowrap italic" @mouseenter="setService(i)">
              <span class="service-title cursor-pointer" data-cursor-magnetic>
                <span>{{ s.title }}</span>
                <span class="inline-flex items-center gap-[0.35em] whitespace-nowrap relative"><span class="leading-none">{{ s.title }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="w-[1em] h-[1em] shrink-0"><line x1="5" y1="5" x2="15" y2="15" stroke="currentColor" stroke-width="1.5"/><polyline points="5,15 15,15 15,5" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
                </span>
              </span>
            </h3>
          </div>
          <div class="col-start-11 col-end-14 relative h-[40%]" data-cursor-magnetic>
            <div class="relative w-full h-full">
              <div class="relative overflow-hidden w-full h-[40rem] rounded-lg">
                <img v-for="(s,i) in services" :key="s.img" :src="s.img" alt="" class="js-service-img absolute inset-0 w-full h-full object-cover transition-opacity duration-500" :class="active===i ? 'opacity-100' : 'opacity-0'" />
              </div>
              <div class="absolute top-full left-0 w-full leading-[100%] pt-20">
                <p v-for="(s,i) in services" :key="s.title" class="normal-case font-light absolute top-0 left-0 w-full pt-20 transition-opacity duration-500" :class="active===i ? 'opacity-100' : 'opacity-0'">{{ s.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-w">
        <div class="col-span-full flex xl:hidden flex-col">
          <div v-for="s in services" :key="s.title" class="flex flex-col mb-100 py-[0.4rem]">
            <h3 class="text-[3rem] md:text-[5rem] uppercase font-light leading-[100%] mb-50 italic">{{ s.title }}</h3>
            <figure class="relative overflow-hidden rounded-lg aspect-video"><img :src="s.img" alt="" class="w-full h-full object-cover" /></figure>
            <p class="normal-case text-[1.8rem] md:text-[3rem] leading-[100%] font-light mt-50 mb-10">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="h-20" />

    <!-- iterate -->
    <div class="relative flex flex-col mb-100">
      <h2 class="relative leading-[140%] w-full py-10 px-container overflow-hidden text-[3rem] md:text-[5rem] xl:text-[3rem]"><span class="js-header block relative normal-case w-full">(iterate)</span></h2>
      <div class="relative w-full min-h-screen flex flex-col py-container">
        <div class="relative grid-w flex h-full w-full">
          <div class="relative col-start-1 col-span-full xl:col-end-11 h-full">
            <div class="js-rect absolute hidden xl:block right-0 top-0 w-1/2 h-[90%] bg-black/10 will-change origin-bottom-right" />
            <div class="js-cover-prnt aspect-video absolute top-0 left-0 w-[300%] md:w-[200%] xl:w-[150%] h-[80%] -translate-x-[20vw] xl:translate-x-0 will-change origin-bottom-right" data-cursor-magnetic>
              <figure class="w-full h-full overflow-hidden rounded-xl"><img src="/images/explore.jpg" alt="" class="kenburns w-full h-full object-cover" /></figure>
            </div>
          </div>
          <div class="hidden col-start-11 col-span-full h-full xl:flex flex-col items-start justify-between pointer-events-none">
            <div class="relative flex flex-col w-full text-[3rem] xl:text-[5rem] leading-[100%] font-light">
              <div class="xl:text-[5rem] leading-[100%]">form <span class="js-text-a font-bold whitespace-nowrap inline-block will-change">follows</span></div>
              <div class="xl:text-[13.6rem] leading-[100%] normal-case xl:tracking-[-0.7rem] text-nowrap -mt-30"><span class="js-text-b uline-forever whitespace-nowrap inline-block will-change">motion</span></div>
            </div>
            <div class="relative w-[70%] flex pointer-events-auto xl:-mt-200">
              <p class="relative normal-case font-light text-[1.8rem] leading-[100%] w-full select-none"><span class="js-text block relative w-full will-change">constant complexity. refined velocity. we don't reduce the weight; we increase the momentum.</span></p>
            </div>
            <div class="h-[40%] w-[80%] hidden xl:block">
              <div class="w-full aspect-[3/2] backdrop-blur-lg overflow-hidden rounded-xl"><canvas ref="tracker" class="js-tracker w-full h-full bg-black/5" /></div>
            </div>
          </div>
        </div>
        <div class="absolute grid-w flex flex-col w-full items-end bottom-100 pointer-events-none">
          <div class="col-start-1 col-span-full xl:col-end-6 flex flex-col italic text-[5rem] leading-[140%] normal-case font-light pointer-events-auto">
            <h3 v-for="w in ['variants','colors','animation','why not']" :key="w" class="js-iterate-title flex flex-col overflow-hidden cursor-pointer h-[6rem]" data-cursor-magnetic>
              <span class="block relative">{{ w }}</span>
              <span class="block relative"><span class="inline-flex items-center gap-[0.35em] whitespace-nowrap relative"><span class="leading-none">{{ w }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="-rotate-90 w-[1em] h-[1em] shrink-0"><line x1="5" y1="5" x2="15" y2="15" stroke="currentColor" stroke-width="1.5"/><polyline points="5,15 15,15 15,5" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
              </span></span>
            </h3>
          </div>
        </div>
      </div>
    </div>

    <!-- explore -->
    <section class="relative w-screen py-[15vh]">
      <div class="grid-w">
        <div class="col-span-full xl:col-start-2 xl:col-span-10">
          <p class="text-[1.4rem] tracking-widest opacity-60 mb-10">(explore)</p>
          <h2 class="text-[5rem] md:text-[9rem] xl:text-[13.6rem] font-light leading-[100%] tracking-[-0.7rem] normal-case">
            <span class="js-explore block">Let's make</span>
            <span class="js-explore block">custom interfaces</span>
            <span class="js-explore block">individually for</span>
            <span class="js-explore block">your need</span>
          </h2>
          <div class="mt-[10vh] grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
            <figure class="overflow-hidden rounded-xl aspect-video" data-cursor-text="View"><img src="/images/explore.jpg" alt="" class="kenburns w-full h-full object-cover" /></figure>
            <p class="text-[1.8rem] font-light normal-case leading-[140%]">Blending motion, color, and shape into one fluid language. Through animation and visual design, I turn raw concepts into captivating stories that invite curiosity and spark emotion.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const active = ref(0)
const particles = ref(null)
const tracker = ref(null)
const trails = ['/images/tile-abstract.jpg','/images/service-brand.jpg','/images/service-film.jpg','/images/service-immersive.jpg','/images/reel.jpg','/images/explore.jpg','/images/portrait.jpg']
const services = [
  { title: 'Product & Brand', img: '/images/service-brand.jpg', desc: 'Shaping visual identity systems, CGI, and hyper-realistic product launches. Translating brand design into tactile form, spatial lighting, and bespoke assets.' },
  { title: 'Commercials & Film', img: '/images/service-film.jpg', desc: 'Directing flagship brand campaigns and hero films. Full-service 3D motion design, VFX, and cinematic storytelling crafted for high-impact screens.' },
  { title: 'Immersive', img: '/images/service-immersive.jpg', desc: 'Breaking the flat screen through AR/XR, WebGL, and digital OOH. Designing kinetic physics and spatial experiences where bespoke craft meets user interaction.' },
]
const setService = (i) => { active.value = i }

onMounted(async () => {
  const { default: gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  const { default: Lenis } = await import('lenis')
  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)

  // loader 0 -> 100
  const counter = { v: 0 }
  const noEl = document.querySelector('.js-no')
  gsap.to(counter, {
    v: 100, duration: 1.8, ease: 'power2.inOut',
    onUpdate: () => { if (noEl) noEl.textContent = Math.round(counter.v) },
    onComplete: () => {
      gsap.to('.js-loader-bg', { yPercent: -100, duration: 0.9, ease: 'power4.inOut' })
      gsap.to('.js-loader-no', { opacity: 0, duration: 0.4 })
      gsap.to('.js-header', { opacity: 1, duration: 0.6, delay: 0.5 })
      gsap.fromTo('.js-title', { yPercent: 110 }, { yPercent: 0, duration: 1.1, ease: 'power4.out', delay: 0.4 })
      gsap.to('.js-line', { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, delay: 0.7, ease: 'power3.out' })
    }
  })
  gsap.to('.js-loader-line', { scaleY: 1, duration: 1.8, ease: 'power2.inOut' })
  gsap.fromTo('.js-loader-no', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6 })

  // scroll progress line
  gsap.to('.js-scrollbar-line', {
    scaleY: 1, ease: 'none',
    scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 }
  })

  // generic reveals
  gsap.utils.toArray('.js-big-title, .js-trend, .js-explore, .js-header, .js-header-text, .js-ready').forEach(el => {
    gsap.fromTo(el, { yPercent: 110 }, {
      yPercent: 0, duration: 1, ease: 'power4.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    })
  })
  gsap.utils.toArray('.js-subtitle').forEach(el => {
    gsap.fromTo(el, { yPercent: 110 }, {
      yPercent: 0, duration: 0.9, ease: 'power4.out',
      scrollTrigger: { trigger: el, start: 'top 90%' }
    })
  })

  // trail parallax
  gsap.utils.toArray('.js-trail').forEach((el, i) => {
    gsap.to(el, {
      y: (i % 2 ? -80 : 80), rotation: (i % 2 ? 3 : -3), ease: 'none',
      scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1 }
    })
  })

  // marquee rows drift on scroll
  gsap.to('.js-marquee-row', {
    xPercent: -12, ease: 'none',
    scrollTrigger: { trigger: '.js-marquee-section', start: 'top bottom', end: 'bottom top', scrub: 1 }
  })

  // iterate cover parallax
  gsap.fromTo('.js-cover-prnt', { y: 60 }, {
    y: -60, ease: 'none',
    scrollTrigger: { trigger: '.js-cover-prnt', start: 'top bottom', end: 'bottom top', scrub: 1 }
  })
  gsap.fromTo('.js-rect', { scaleY: 0 }, {
    scaleY: 1, ease: 'none',
    scrollTrigger: { trigger: '.js-rect', start: 'top bottom', end: 'top 40%', scrub: 1 }
  })

  // particle canvas
  const c = particles.value
  if (c) {
    const ctx = c.getContext('2d')
    let W, H, pts = []
    const resize = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight }
    resize(); addEventListener('resize', resize)
    for (let i = 0; i < 90; i++) pts.push({ x: Math.random(), y: Math.random(), r: Math.random()*2+0.5, s: Math.random()*0.0006+0.0002 })
    const draw = () => {
      ctx.clearRect(0,0,W,H)
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--blue') || '#1929fe'
      pts.forEach(p => {
        p.y -= p.s; if (p.y < 0) p.y = 1
        ctx.beginPath(); ctx.arc(p.x*W, p.y*H, p.r, 0, Math.PI*2); ctx.fill()
      })
      requestAnimationFrame(draw)
    }
    draw()
  }

  // tracker canvas (mouse trail)
  const t = tracker.value
  if (t) {
    const ctx = t.getContext('2d')
    let W, H, trail = []
    const resize = () => { W = t.width = t.offsetWidth; H = t.height = t.offsetHeight }
    resize(); addEventListener('resize', resize)
    t.parentElement.addEventListener('mousemove', (e) => {
      const r = t.getBoundingClientRect()
      trail.push({ x: e.clientX - r.left, y: e.clientY - r.top })
      if (trail.length > 40) trail.shift()
    })
    const draw = () => {
      ctx.clearRect(0,0,W,H)
      trail.forEach((p,i) => {
        ctx.fillStyle = `rgba(25,41,254,${i/trail.length*0.5})`
        ctx.beginPath(); ctx.arc(p.x, p.y, i*0.4, 0, Math.PI*2); ctx.fill()
      })
      requestAnimationFrame(draw)
    }
    draw()
  }
})
</script>
