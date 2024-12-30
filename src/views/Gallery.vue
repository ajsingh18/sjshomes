<script setup lang="ts">
import ImageGallery from '../components/image-gallery.vue'

const images = Object.values(
  import.meta.glob('../../public/house-images/*.jpg', { eager: true, as: 'url' })
)
</script>

<template>
  <ImageGallery :images="images" />
</template>
