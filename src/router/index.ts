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
        title: 'Home',
        description:
          'Discover the perfect blend of quality and comfort with SJS Homes, your trusted home developer in Edmonton. Explore our latest projects and find your dream home today.'
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
        title: 'About',
        description:
          'Learn about SJS Homes, where we create high-quality, custom-built homes in Edmonton. With a customer-first approach, we turn your house into a cherished home.'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue'),
      meta: {
        title: 'Contact',
        description:
          'Get in touch with SJS Homes today. Whether you have questions or are ready to start your home-building journey, our team is here to help you every step of the way.'
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/Projects.vue'),
      meta: {
        title: 'Projects',
        description:
          'Explore the current projects by SJS Homes in Edmonton. View our latest developments and find out how we can build the home of your dreams.'
      }
    }
  ]
})

export default router
