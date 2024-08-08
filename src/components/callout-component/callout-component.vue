<template>
  <div class="callout-container">
    <img :src="img" class="callout-image" />
    <h1 class="callout-title">{{ title }}</h1>
    <div class="callout-description">{{ description }}</div>
    <button class="button" @click="handleCalloutClick">{{ buttonText }}</button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  img: string
  title: string
  description: string
  buttonText: string
  calloutId: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  calloutClick: [calloutId: string]
}>()

const handleCalloutClick = () => {
  emit('calloutClick', props.calloutId)
}
</script>

<style scoped>
.callout-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  .callout-image {
    height: 150px;
    width: 150px;
  }

  .callout-title {
    text-align: center;
  }

  .callout-description {
    text-align: center;
    margin-bottom: 8px;
  }
}
@media (min-width: 40rem) {
  .callout-container {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border-radius: 5px;
    width: 415px;
    margin: 16px;
    word-break: break-word;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    background-color: white;

    .callout-title {
      font-size: 1.5rem;
      color: #1a1a1a;
    }

    .callout-description {
      text-align: center;
      margin-bottom: 8px;
      color: #2e2e2e;
    }

    .callout-image {
      height: 100px;
      width: 100px;
    }
  }
}
</style>
