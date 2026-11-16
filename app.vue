<template>
  <div>
    <Cursor />
    <SiteHeader />
    <main id="main" class="h-full">
      <NuxtPage />
    </main>
    <SiteFooter />
    <CookieConsent />
  </div>
</template>

<script setup>
import Cursor from '~/components/Cursor.vue'
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import CookieConsent from '~/components/CookieConsent.vue'
</script>
