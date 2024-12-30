<template>
  <footer class="main-footer">
    <router-link to="/" v-slot="{ href, navigate }">
      <img
        height="150px"
        :src="logo"
        v-if="!isMobile"
        :href="href"
        @click="navigate"
        alt="SJS Homes"
      />
    </router-link>
    <div class="footer-links-container">
      <h1>Quick Links</h1>
      <a class="footer-review-link" href="https://g.page/r/CdEX9Hz_lDaiEAE/review"
        >Leave us a Review!</a
      >
      <router-link class="footer-review-link" to="/projects">Projects</router-link>
      <router-link class="footer-review-link" to="/contact">Contact</router-link>
      <router-link class="footer-review-link" to="/gallery">Gallery</router-link>
      <a v-if="!isMobile" class="designer-link footer-review-link" href="https://frigidits.ca/"
        >Designed by Frigid IT Solutions</a
      >
    </div>

    <div class="mobile-contact-container" v-if="isMobile">
      <a href="mailto:sjshomes2014@gmail.com">
        <img class="email-icon" :src="emailIcon" alt="email icon"
      /></a>
      <a href="tel:+1-780-966-1062"><img class="phone-icon" :src="phoneIcon" alt="phone icon" /></a>
    </div>
    <a v-if="isMobile" class="designer-link" href="https://frigidits.ca/"
      >Designed by Frigid IT Solutions</a
    >

    <div class="contact-container" v-else>
      <h1 class="contact-header">Contact</h1>
      <img class="email-icon" :src="emailIcon" alt="email icon" />
      <p class="email">sjshomes2014@gmail.com</p>
      <img class="phone-icon" :src="phoneIcon" alt="phone icon" />
      <p class="phone">(780) 966-0162<br />(587)-590-5343</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import emailIcon from '/images/email-icon.svg'
import phoneIcon from '/images/phone-icon.svg'
import logo from '/images/header-logo-transparent.png'
import { RouterLink } from 'vue-router'
import { isMobile } from '@/helpers/mobile-helper'
</script>

<style scoped>
.main-footer {
  background-color: #1a1a1a;
  color: white;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .footer-links-container {
    display: flex;
    flex-direction: column;
    gap: 16px;

    h1 {
      font-size: 24px;
      margin: 0;
    }

    .footer-review-link {
      text-decoration: none;
    }
  }

  .designer-link {
    margin-top: 8px;
    font-size: 14px;
    text-decoration: none;
  }

  .mobile-contact-container {
    margin-top: 16px;
    display: flex;
    gap: 8px;

    .email-icon {
      height: 40px;
    }
    .phone-icon {
      height: 40px;
    }
  }

  a {
    color: white;
  }
}
@media (min-width: 40rem) {
  .main-footer {
    background-color: #1a1a1a;
    color: white;
    display: flex;
    padding: 16px;
    justify-content: space-between;
    flex-direction: row;

    .footer-links-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: center;

      h1 {
        font-size: 24px;
        margin: 0;
      }

      .designer-link {
        font-size: 14px;
      }

      .footer-review-link {
        position: relative;
        text-decoration: none;
        color: white;

        &:hover {
          color: #c2a460;
        }

        &::before {
          content: '';
          position: absolute;
          display: block;
          width: 100%;
          height: 3px;
          bottom: -5px;
          left: 0;
          background-color: #c2a460;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        &:hover::before {
          transform: scaleX(1);
        }
      }
    }

    /* might want to redo this grid */
    .contact-container {
      display: grid;
      grid-template-columns: 25px auto;
      align-items: center;
      column-gap: 8px;

      .contact-header {
        grid-column: span 2;
        margin: 0;
        font-size: 24px;
      }

      .phone {
        align-self: baseline;
      }
    }

    a {
    }
  }
}
</style>
