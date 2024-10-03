<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My Website</a>
        <button class="navbar-toggler" type="button" @click="toggleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ show: navbarOpen }">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/images">Images</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/accordion">Accordion</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/grid">Grid</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <!-- Header Component -->
    <HeaderComponent>
      <template v-slot:title>Image Gallery</template> <!-- Custom title for the header -->
    </HeaderComponent>

    <!-- Image Gallery -->
    <div class="container my-4">
      <h2 class="text-center">Image Gallery</h2>
      <div class="row">
        <!-- Iterate over images array and use the ImageComponent -->
        <div v-for="(image, index) in images" :key="index" class="col-lg-4 col-md-6 mb-4">
          <ImageComponent
            :src="image.src"
            :alt="image.alt"
            :title="image.title" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import the ImageComponent
import ImageComponent from '../components/ImageComponent.vue';

export default {
  name: 'ImagesPage',
  components: {
    ImageComponent // Register the component
  },
  data() {
    return {
      navbarOpen: false,
      images: [
        { src: 'https://via.placeholder.com/400x300', alt: 'Image 1', title: 'Image 1 Title' },
        { src: 'https://via.placeholder.com/400x300', alt: 'Image 2', title: 'Image 2 Title' },
        { src: 'https://via.placeholder.com/400x300', alt: 'Image 3', title: 'Image 3 Title' },
        { src: 'https://via.placeholder.com/400x300', alt: 'Image 4', title: 'Image 4 Title' },
        { src: 'https://via.placeholder.com/400x300', alt: 'Image 5', title: 'Image 5 Title' },
        { src: 'https://via.placeholder.com/400x300', alt: 'Image 6', title: 'Image 6 Title' }
      ]
    }
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen; // Toggle the navbar state
    }
  }
}
</script>

<style scoped>
/* Additional styles can be added here */
</style>