<template>
  <div ref="dot" class="cursor-dot" />
  <div ref="ring" class="cursor-ring"><span ref="label" class="opacity-0">Play</span></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const dot = ref(null)
const ring = ref(null)
const label = ref(null)

onMounted(() => {
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my
  const move = (e) => {
    mx = e.clientX; my = e.clientY
    if (dot.value) dot.value.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`
  }
  const loop = () => {
    rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16
    if (ring.value) ring.value.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
    requestAnimationFrame(loop)
  }
  addEventListener('mousemove', move)
  loop()

  const bind = () => {
    document.querySelectorAll('[data-cursor-text]').forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.value?.classList.add('is-text')
        if (label.value) { label.value.textContent = el.dataset.cursorText; label.value.style.opacity = 1 }
      })
      el.addEventListener('mouseleave', () => {
        ring.value?.classList.remove('is-text')
        if (label.value) label.value.style.opacity = 0
      })
    })
    document.querySelectorAll('a, button, [data-cursor-magnetic]').forEach(el => {
      el.addEventListener('mouseenter', () => ring.value?.classList.add('is-hover'))
      el.addEventListener('mouseleave', () => ring.value?.classList.remove('is-hover'))
    })
  }
  setTimeout(bind, 600)
})
</script>
