<template>
  <head>
    <title>SJS Homes</title>
  </head>
  <Header :logo="headerLogo" />
  <RouterView />
  <Footer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer.vue'
import headerLogo from '/images/header-logo-transparent.png'
import AOS from 'aos'
import { onMounted } from 'vue'
// importing AOS css style globally
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ once: true })
})
</script>

<style scoped></style>
