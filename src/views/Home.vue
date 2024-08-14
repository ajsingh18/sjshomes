<template>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <div class="home-container">
    <div class="highlight-video-container">
      <video width="100%" autoplay muted loop playsinline preload="auto">
        <source src="/videos/withimage.mp4" type="video/mp4" />
      </video>
    </div>
    <div
      class="callouts-container striped-background"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <callout-component
        :img="contacUsImg"
        title="Get in Touch with Us"
        description="Whether you are looking to build your dream home, explore our current projects, or simply have questions about our services, we are here to help."
        button-text="CONTACT US"
        callout-id="contact-us"
        @callout-click="calloutClickHandler"
      />
      <callout-component
        :img="currentProjectsImg"
        title="Discover Our Current Projects"
        description="Ready to see what we've been working on? Explore our latest developments and find the home that suits your lifestyle. From modern designs to sustainable living solutions, we have something for everyone."
        button-text="EXPLORE OUR CURRENT PROJECTS"
        callout-id="projects"
        @callout-click="calloutClickHandler"
      />
      <callout-component
        :img="reviewImg"
        title="Hear from Our Happy Homeowners"
        description="Don't just take our word for it—see what our satisfied clients have to say about their new homes. Discover why SJS Homes is the trusted choice for home development."
        button-text="READ OUR REVIEWS"
        callout-id="reviews"
        @callout-click="calloutClickHandler"
      />
    </div>

    <div class="about-container" data-aos="fade-in" data-aos-duration="1000">
      <img class="about-image" :src="aboutImg" alt="about image" />
      <div class="about-content">
        <h1 class="about-header">About SJS Homes</h1>
        <p class="about-body">
          At SJS Homes, we have been providing quality homes to Edmonton and the surrounding areas
          for years. Our commitment to excellence and our dedication to our clients have made us a
          trusted name in home development.
          <br /><br />
          We specialize in new-build homes that offer peace of mind, thanks to our rigorous quality
          control and attention to detail. Operating with a customer-first approach, we ensure that
          each home we build is tailored to meet the unique needs and preferences of our clients.
          <br /><br />
          At SJS Homes, we believe that a house is more than just a structure; it’s a place where
          memories are made, families grow, and dreams are realized. That’s why we take the time to
          get to know our clients, understand their vision, and deliver homes that exceed their
          expectations.
          <br /><br />
          Our team of experienced professionals is dedicated to providing you with the best
          home-building experience possible. From the initial consultation to the final walkthrough,
          we are with you every step of the way, ensuring that your journey to owning a new home is
          smooth and enjoyable.
          <br /><br />
          This isn’t just a house; this is your home. Let us at SJS Homes provide you with the best
          experience possible, creating a space that you and your family will love for years to
          come.
        </p>
        <router-link to="/about" v-slot="{ href, navigate }">
          <button class="about-button button" :href="href" @click="navigate">Learn More</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CalloutComponent from '@/components/callout-component/callout-component.vue'
import contacUsImg from '/images/contact-us-logo.svg'
import currentProjectsImg from '/images/home-logo.svg'
import reviewImg from '/images/review-logo.svg'
import aboutImg from '/house-images/15.jpg'
import router from '@/router'

const calloutClickHandler = (calloutId: string) => {
  switch (calloutId) {
    case 'reviews':
      window.open('https://g.page/r/CdEX9Hz_lDaiEAE/review', '_blank')?.focus()
      break
    case 'contact-us':
      router.push('/contact')
      break
    case 'projects':
      router.push('/projects')
      break
  }
}
</script>

<style scoped>
.home-container {
  margin-bottom: 16px;
  .highlight-video-container {
    video {
      display: block;
      margin: 0 auto;
      width: 100%;
      max-height: 100%;
    }
  }
  .about-container {
    .about-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 0 8px;

      .about-button {
        width: 90vw;
      }
    }

    .about-image {
      height: 40vh;
      width: 100vw;
    }
  }
}
@media (min-width: 40rem) {
  .home-container {
    .highlight-video-container {
      margin-bottom: 48px;
    }
    .about-container {
      display: flex;
      margin-bottom: 48px;
      gap: 48px;
      padding: 8px 96px;
      background-color: #ffffff;

      .about-image {
        height: 700px;
        width: 750px;
      }

      .about-content {
        display: flex;
        flex-direction: column;
        text-align: left;
        align-items: baseline;

        .about-body {
          word-break: break-word;
          color: #2e2e2e;
          font-size: 1.2rem;
        }

        .about-button {
          max-width: 150px;
          margin-top: auto;
        }
      }
    }

    .callouts-container {
      display: flex;
      justify-content: center;
      margin-bottom: 48px;
      padding: 32px;
    }
  }
}

@media (max-width: 1650px) {
  .home-container {
    .about-container {
      .about-content {
        .about-body {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
