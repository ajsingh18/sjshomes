<template>
  <div class="project box-border-shadow">
    <div class="image-container">
      <img
        width="380px"
        height="350px"
        :src="getImgUrl(img)"
        class="project-image"
        :alt="title + ' image'"
      />
      <img height="150px" class="sold-overlay" :src="soldimg" v-if="isSold" />
    </div>
    <h1 class="project-title">{{ title }}</h1>
    <div class="project-details">
      <div class="bedroom-container">
        <img :src="bedIcon" alt="bed icon" /> {{ bedrooms + ' bedroom' }}
      </div>
      <div class="bathroom-container">
        <img :src="bathIcon" alt="bath icon" /> {{ bathrooms + ' bathroom' }}
      </div>
      <div class="size-container">{{ sqft + ' Sq. Ft.' }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import bedIcon from '/images/bed-icon.svg'
import bathIcon from '/images/bathtub-icon.svg'
import soldimg from '/images/sold-overlay.png'
interface Props {
  img: string
  title: string
  sqft: number
  bedrooms: number
  bathrooms: number
  isSold: boolean
}

const props = defineProps<Props>()

const getImgUrl = (img: string) => {
  return new URL(`/images/${img}`, window.location.origin).href
}
</script>

<style scoped>
.project {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 32px;
  padding-bottom: 16px;

  .image-container {
    position: relative;

    img {
      border-radius: 5px;
    }

    .sold-overlay {
      position: absolute;
      opacity: 0.5;
      left: 0;
    }
  }

  .project-title {
    font-size: 24px;
  }

  .project-details {
    display: flex;
    align-items: center;
    gap: 16px;

    .bedroom-container {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .bathroom-container {
      display: flex;
      align-items: center;
      gap: 4px;

      img {
        height: 20px;
        width: 20px;
      }
    }
  }
}
@media (min-width: 42rem) {
  .project {
    background-color: white;
    padding: 16px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    margin: 8px;

    .project-title {
      font-size: 24px;
    }

    .project-details {
      display: flex;
      align-items: center;
      gap: 16px;

      .bedroom-container {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .bathroom-container {
        display: flex;
        align-items: center;
        gap: 4px;

        img {
          height: 20px;
          width: 20px;
        }
      }
    }
  }
}
</style>
