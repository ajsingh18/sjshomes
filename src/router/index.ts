import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'SJS Homes | Custom Home Builders in Edmonton & Surrounding Areas',
        description:
          'Welcome to SJS Homes, Edmonton’s trusted custom home builders. Discover exceptional craftsmanship, modern designs, and quality living tailored to your lifestyle.'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue'),
      meta: {
        title: 'About SJS Homes | Edmonton’s Custom Home Development Experts',
        description:
          'Learn about SJS Homes, your premier custom home builders in Edmonton. Discover our commitment to quality, personalized designs, and exceptional customer service.'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
      meta: {
        title: 'Contact SJS Homes | Start Your Custom Home Journey Today',
        description:
          'Contact SJS Homes for all your custom home building needs in Edmonton. Let’s discuss your dream home and how we can turn it into reality with expert craftsmanship.'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue'),
      meta: {
        title: 'SJS Homes Projects | Custom Homes in Edmonton & Beyond',
        description:
          'Explore SJS Homes’ custom home projects in Edmonton. See our portfolio of modern designs, high-quality builds, and tailored homes crafted for unique lifestyles.'
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/Gallery.vue'),
      meta: {
        title: 'Custom Home Gallery | SJS Homes – Edmonton’s Luxury Builders',
        description:
          'View SJS Homes’ custom home gallery showcasing luxury builds, modern designs, and tailored craftsmanship in Edmonton. Discover inspiration for your dream home today.'
      }
    }
  ]
})

export default router
