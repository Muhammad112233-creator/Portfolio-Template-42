<template>
  <div v-if="show" class="fixed bottom-0 left-0 w-full z-[999] p-container pointer-events-none">
    <div class="pointer-events-auto max-w-[60rem] ml-auto rounded-2xl border-2 border-black bg-black/7 backdrop-blur-md p-10 flex flex-col gap-6">
      <h3 class="text-[1.8rem] font-light lowercase">tactile data &amp; privacy</h3>
      <p class="text-[1.4rem] font-light normal-case leading-[140%]">This website uses cookies to improve your experience.</p>
      <div class="flex gap-4 flex-wrap">
        <button class="px-6 py-3 rounded-full bg-blue text-white text-[1.4rem]" @click="save('all')">allow all</button>
        <button class="px-6 py-3 rounded-full border-2 border-black text-[1.4rem]" @click="save('decline')">decline</button>
        <button class="px-6 py-3 rounded-full border-2 border-black text-[1.4rem]" @click="save('options')">options</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const show = ref(false)
onMounted(() => {
  if (!localStorage.getItem('ak-cookie')) setTimeout(() => show.value = true, 2500)
})
const save = (v) => { localStorage.setItem('ak-cookie', v); show.value = false }
</script>
