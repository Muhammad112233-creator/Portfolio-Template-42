<template>
  <header class="site-header js-header grid-w lowercase">
    <div class="col-span-full flex flex-row justify-between items-center text-[1.8rem] md:text-[3rem] xl:text-[1.4rem] normal-case">
      <nav class="header-pill flex items-center">
        <NuxtLink to="/" class="header-link text-blue"><span class="dummy">index,</span><span class="real">index,</span></NuxtLink>
        <NuxtLink to="/about" class="header-link text-blue"><span class="dummy">about,</span><span class="real">about,</span></NuxtLink>
        <NuxtLink to="/contact" class="header-link text-blue"><span class="dummy">contact</span><span class="real">contact</span></NuxtLink>
      </nav>
      <div class="header-pill relative flex items-center justify-between overflow-hidden leading-[140%]">
        <NuxtLink to="/" class="pointer-events-auto flex justify-center items-center ml-5 whitespace-nowrap">
          <span class="block xl:hidden">ak</span><span class="hidden xl:block">arham khan</span>
        </NuxtLink>
        <button id="theme-toggle" aria-label="toggle theme" class="relative pointer-events-auto flex items-center justify-center w-[4rem] h-[4rem] cursor-pointer" @click="toggleTheme">
          <span class="absolute inset-0 flex items-center justify-center">
            <svg v-if="!dark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>
          </span>
        </button>
        <button aria-label="change language" class="relative pointer-events-auto w-[4rem] h-[4rem] overflow-hidden cursor-pointer" @click="lang = lang === 'ro' ? 'en' : 'ro'">
          <span class="absolute inset-0 flex items-center justify-center">{{ lang }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const dark = ref(false)
const lang = ref('ro')
const toggleTheme = () => {
  dark.value = !dark.value
  document.documentElement.classList.toggle('dark', dark.value)
}
onMounted(() => {
  dark.value = document.documentElement.classList.contains('dark')
})
</script>
