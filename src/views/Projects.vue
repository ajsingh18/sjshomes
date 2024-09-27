<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <teleport to="head">
    <component :is="'script'" type="application/ld+json">
      { "@context": "https://schema.org", "@type": "Product", "name": "Custom Built Homes", "image":
      "https://sjshomes.ca/images/384-image.png", "description": "Explore the current projects by
      SJS Homes in Edmonton. View our latest developments and find out how we can build the home of
      your dreams.", "brand": { "@type": "Organization", "name": "SJS Homes" }, "offers": { "@type":
      "Offer", "priceCurrency": "CAD", "url": "https://www.sjshomes.com/projects", "price": "Contact
      us for pricing", "itemCondition": "https://schema.org/NewCondition", "availability":
      "https://schema.org/InStock" } }
    </component>
  </teleport>
  <div class="project-container" data-aos="fade-in" data-aos-duration="1000">
    <h1>Browse our current projects</h1>
    <p>See something you like? Contact us to get more information about that specific property!</p>
    <div class="projects-container">
      <project-display-component
        v-for="project in projects"
        :key="project.title"
        v-bind="project"
      />
    </div>
  </div>
</template>

<script setup>
import projectDisplayComponent from '@/components/project-display-component/project-display-component.vue'
import projects from '@/assets/projects.json'
</script>

<style scoped>
/* Add your styles here */
.project-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 48px;

  h1 {
    font-size: 48px;
  }

  p {
    font-size: 1.3rem;
    color: #2e2e2e;
  }

  .projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: unset;
  }
}

@media (max-width: 42rem) {
  .project-container h1,
  .project-container p {
    text-align: center;
  }

  .project-container {
    .projects-container {
      justify-content: center;
    }
  }
}
</style>
