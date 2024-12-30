<template>
  <div class="image-gallery">
    <!-- Image Grid -->
    <div class="grid">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="grid-item"
        :class="{ 'animate-in': animationsDone[index] }"
        @click="openFullscreen(index)"
      >
        <img :src="image" alt="Gallery Image" />
      </div>
    </div>

    <!-- Fullscreen Modal -->
    <div v-if="fullscreenVisible" class="fullscreen-modal" @click.self="closeFullscreen">
      <button class="close-button" @click="closeFullscreen">X</button>
      <button class="nav-button prev" @click="prevImage">‹</button>
      <button class="nav-button next" @click="nextImage">›</button>
      <img :src="images[currentImage]" alt="Fullscreen Image" class="fullscreen-image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  images: string[] // List of image URLs
}>()

// State management
const fullscreenVisible = ref(false)
const currentImage = ref(0)

// Animation state
const animationsDone = ref(props.images.map(() => false))

// Open fullscreen mode
function openFullscreen(index: number) {
  currentImage.value = index
  fullscreenVisible.value = true
}

// Close fullscreen mode
function closeFullscreen() {
  fullscreenVisible.value = false
}

// Navigate to the previous image
function prevImage() {
  if (currentImage.value > 0) {
    currentImage.value--
  } else {
    currentImage.value = props.images.length - 1
  }
}

// Navigate to the next image
function nextImage() {
  if (currentImage.value < props.images.length - 1) {
    currentImage.value++
  } else {
    currentImage.value = 0
  }
}

// Handle animation on mount
onMounted(() => {
  props.images.forEach((_, index) => {
    setTimeout(() => {
      animationsDone.value[index] = true
    }, index * 150) // Stagger animations for each image
  })
})
</script>

<style scoped>
/* Grid Layout */
.image-gallery {
  padding: 16px;
}

.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}

.grid-item {
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  opacity: 0;
  transform: translateY(50px);
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* Hover Expand Effect */
.grid-item:hover img {
  transform: scale(1.05); /* Expands the image on hover */
}

/* Initial Slide Up Fade Animation */
.grid-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Fullscreen Modal */
.fullscreen-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.fullscreen-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.8);
}

.close-button {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 1010;
}

.nav-button {
  position: absolute;
  top: 50%;
  background: none;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
  z-index: 1010;
  transform: translateY(-50%);
}

.nav-button.prev {
  left: 16px;
}

.nav-button.next {
  right: 16px;
}
</style>
