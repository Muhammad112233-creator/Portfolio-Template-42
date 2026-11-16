<template>
  <div class="pt-[25vh] pb-[15vh] px-container">
    <p class="text-[1.4rem] tracking-widest opacity-60 mb-10">(contact)</p>
    <h1 class="text-[5rem] md:text-[9rem] xl:text-[13.6rem] font-light leading-[100%] tracking-[-0.7rem] normal-case">
      <span class="block">Let's build</span>
      <span class="block">something bold</span>
    </h1>
    <form class="mt-[10vh] max-w-[80rem] flex flex-col gap-8" @submit.prevent="sent = true">
      <input v-model="name" required placeholder="your name" class="bg-transparent border-b-2 border-black py-6 text-[1.8rem] font-light normal-case outline-none placeholder:opacity-40" />
      <input v-model="email" type="email" required placeholder="your email" class="bg-transparent border-b-2 border-black py-6 text-[1.8rem] font-light normal-case outline-none placeholder:opacity-40" />
      <textarea v-model="msg" required rows="4" placeholder="tell me about your project" class="bg-transparent border-b-2 border-black py-6 text-[1.8rem] font-light normal-case outline-none placeholder:opacity-40 resize-y" />
      <button data-cursor-magnetic class="self-start px-10 py-6 rounded-full bg-blue text-white text-[1.4rem] uppercase">send message ↗</button>
      <p v-if="sent" class="text-[1.8rem] font-light normal-case">Thanks {{ name }} — I'll get back to you within 24 hours.</p>
    </form>
    <div class="mt-[10vh] text-[1.8rem] font-light normal-case leading-[140%]">
      <p>hello@arhamkhan.dev</p>
      <p>Lahore, Pakistan — working worldwide</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref(''), email = ref(''), msg = ref(''), sent = ref(false)
</script>
