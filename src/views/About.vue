<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div data-aos="fade-in" data-aos-duration="1000">
    <div class="about-us-container">
      <h2>About Us</h2>
      <p>
        At SJS Homes, we believe that a house is more than just a structure; it’s a place where
        memories are made and dreams are nurtured. Our team of experienced professionals is
        dedicated to providing you with the best home-building experience possible. From the initial
        consultation to the final walkthrough, we are with you every step of the way.
      </p>
      <p>Let us help you build the home of your dreams. Discover the SJS Homes difference today!</p>
    </div>
    <div class="objectives-container">
      <div>
        <h2>Our Mission</h2>
        <p>
          To create homes that reflect our clients' dreams and aspirations, ensuring every detail is
          crafted with precision and care.
        </p>
      </div>
      <div class="divider"></div>

      <div>
        <h2>Our Vision</h2>
        <p>
          To be the leading home developer in Edmonton, known for our innovation, quality, and
          customer-centric approach.
        </p>
      </div>
      <div class="divider"></div>

      <div class="values-container">
        <h2>Our Values</h2>
        <p>
          <strong>Quality:</strong> We use only the finest materials and latest construction
          techniques.<br />
          <strong>Integrity:</strong> Honesty and transparency are at the core of everything we
          do.<br />
          <strong>Customer Focus:</strong> We prioritize your needs and work tirelessly to meet
          them.<br />
          <strong>Sustainability:</strong> We are committed to eco-friendly building practices.
        </p>
      </div>
    </div>
    <div class="carousel-container striped-background">
      <Carousel :autoplay="3000" :wrap-around="true" :transition="1500"
        ><slide v-for="slide in mapped" :key="slide"
          ><img :src="slide" class="current-slide"
        /></slide>
        <template #addons>
          <navigation />
          <pagination /> </template
      ></Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const images = import.meta.glob('../../public/house-images/*.jpg')
const mapped: string[] = []

for (let img in images) {
  mapped.push(new URL(`/house-images/${img}`, window.location.origin).href)
}
</script>

<style scoped>
.about-us-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  text-align: center;

  h2 {
    color: #1a1a1a;
    font-size: 32px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #333333;
  }
}

.objectives-container {
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #1a1a1a;
    font-size: 32px;
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 800px;
    color: #333333;
  }

  .values-container {
    p {
      line-height: 2.5rem;
    }
  }

  .divider {
    height: 6px;
    width: 100%;
    background-color: #c2a460;
    border-radius: 3px;
    display: flex;
    margin: 8px 0;
  }
}

.carousel-container {
  padding: 16px 0;

  .current-slide {
    height: 260px;
    width: 260px;
  }
}

@media (min-width: 60rem) {
  .about-us-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    border-radius: 5px;
    text-align: left;

    h2 {
      color: #1a1a1a;
      font-size: 48px;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6;
      max-width: 1440px;
      color: #2e2e2e;
    }
  }

  .objectives-container {
    padding: 32px;
    display: flex;
    flex-direction: row;
    align-items: normal;

    h2 {
      color: #1a1a1a;
      font-size: 48px;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6;
      max-width: 800px;
      color: #2e2e2e;
    }

    .values-container {
      p {
        line-height: 2.5rem;
      }
    }

    .divider {
      width: 6px;
      height: auto;
      background-color: #c2a460;
      border-radius: 3px;
      margin: 0 32px;
    }
  }

  .carousel-container {
    padding-bottom: 32px;
    padding-top: 16px;
    .current-slide {
      height: 800px;
      width: 900px;
    }
  }
}
</style>
