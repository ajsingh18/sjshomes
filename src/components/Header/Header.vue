<template>
  <header class="main-header" ref="navRef">
    <router-link to="/" v-slot="{ href, navigate }">
      <img class="header-logo" :src="logo" :href="href" @click="navigate" />
    </router-link>
    <a v-if="isMobile" href="#" class="menu dropdown-animation" @click="toggleMenu()"
      ><span></span
    ></a>
    <nav class="mobile-nav" v-if="isMobile">
      <expand-transition :duration="250"
        ><ul class="mobile-nav-items" v-if="isMenuOpen">
          <li class="mobile-nav-item" @click="toggleMenu()">
            <router-link to="/">Home</router-link>
          </li>
          <li class="mobile-nav-item">
            <router-link to="/about" @click="toggleMenu()">About</router-link>
          </li>
          <li class="mobile-nav-item">
            <router-link to="/projects" @click="toggleMenu()">Projects</router-link>
          </li>
          <li class="mobile-nav-item">
            <router-link to="/contact" @click="toggleMenu()">Contact</router-link>
          </li>
        </ul></expand-transition
      >
    </nav>
    <nav v-else>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { isMobile } from '@/helpers/mobile-helper'
import { ref } from 'vue'
import expandTransition from '../expand-transition.vue'
import useDetectOutsideClick from '@/helpers/detect-outside-click'

interface Props {
  logo: string
}

defineProps<Props>()

const isMenuOpen = ref(false)
const navRef = ref()

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)

useDetectOutsideClick(navRef, () => {
  if (isMenuOpen.value) {
    toggleMenu()
  }
})
</script>

<style scoped>
.main-header {
  background-color: #1a1a1a;
  display: grid;
  grid-template-areas:
    'icon menu'
    'item item';
  padding: 16px;

  .menu {
    width: 30px;
    height: 30px;
    margin: 25px;
    justify-self: end;
    align-self: center;
    grid-area: menu;
  }
  .menu span {
    margin: 0 auto;
    position: relative;
    top: 12px;
  }
  .menu span:before,
  .menu span:after {
    position: absolute;
    content: '';
  }
  .menu span,
  .menu span:before,
  .menu span:after {
    width: 50px;
    height: 6px;
    background-color: #f59e0b;
    display: block;
  }
  .menu span:before {
    margin-top: -12px;
  }
  .menu span:after {
    margin-top: 12px;
  }

  .dropdown-animation span {
    -webkit-transition-duration: 0s;
    transition-duration: 0s;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  .dropdown-animation:hover span {
    background-color: rgba(0, 0, 0, 0);
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  .dropdown-animation span:before {
    -webkit-transition-property:
      margin,
      -webkit-transform;
    transition-property: margin, transform;
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s;
    -webkit-transition-delay: 0.2s, 0s;
    transition-delay: 0.2s, 0s;
  }
  .dropdown-animation:hover span:before {
    margin-top: 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition-delay: 0s, 0.2s;
    transition-delay: 0s, 0.2s;
  }
  .dropdown-animation span:after {
    -webkit-transition-property:
      margin,
      -webkit-transform;
    transition-property: margin, transform;
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s;
    -webkit-transition-delay: 0.2s, 0s;
    transition-delay: 0.2s, 0s;
  }
  .dropdown-animation:hover span:after {
    margin-top: 0;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transition-delay: 0s, 0.2s;
    transition-delay: 0s, 0.2s;
  }
  .header-logo {
    height: 100px;
    width: 120px;
    grid-area: icon;
  }
}

.mobile-nav {
  grid-area: item;
  justify-self: center;
  grid-column: span 2;

  .mobile-nav-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    text-decoration: none;
    font-size: 32px;

    .mobile-nav-item {
      text-align: center;
      a {
        text-decoration: none;
        color: #ffffff;
        &:active {
          color: #f59e0b;
        }
      }
    }
  }
}

.collapse-enter-active,
.collapse-leave-active {
  transition: height 0.5s;
  overflow: hidden;
}

.collapse-enter,
.collapse-leave-to {
  height: 0;
}

@media (min-width: 40rem) {
  .main-header {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: #040910;
    padding: 8px 32px;
    grid-area: header;

    .header-logo {
      height: 100px;
      width: 130px;
    }

    nav {
      display: flex;
      gap: 24px;

      a {
        position: relative;
        text-decoration: none;
        color: #ffffff;
        font-size: 18px;
      }

      a:hover {
        color: #c2a460;
      }

      a::before {
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

      a:hover::before {
        transform: scaleX(1);
      }
    }
  }
}
</style>
