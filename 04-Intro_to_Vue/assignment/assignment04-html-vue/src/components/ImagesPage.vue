<template>
  <div>
    <!-- Navigation bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My Website</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
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

    <!-- Carousel -->
    <div class="carousel-container">
      <div id="imageCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
            v-for="(carouselImage, index) in carouselImages"
            :key="carouselImage.id"
            :class="['carousel-item', { active: index === 0 }]"
          >
            <img :src="carouselImage.src" class="d-block w-100" :alt="carouselImage.alt" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <!-- Image Gallery -->
    <div class="container my-4">
      <h2 class="text-center">Image Gallery</h2>
      <div class="row">
        <div v-for="image in images" :key="image.id" class="col-lg-4 col-md-6 mb-4">
          <img :src="image.src" :alt="image.alt" class="img-fluid rounded" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImagesPage',
  data() {
    return {
      carouselImages: [
        { id: 1, src: 'https://via.placeholder.com/800x400', alt: 'Slide 1' },
        { id: 2, src: 'https://via.placeholder.com/800x400', alt: 'Slide 2' },
        { id: 3, src: 'https://via.placeholder.com/800x400', alt: 'Slide 3' }
      ],
      images: [
        { id: 1, src: 'https://via.placeholder.com/400x300', alt: 'Image 1' },
        { id: 2, src: 'https://via.placeholder.com/400x300', alt: 'Image 2' },
        { id: 3, src: 'https://via.placeholder.com/400x300', alt: 'Image 3' },
        { id: 4, src: 'https://via.placeholder.com/400x300', alt: 'Image 4' },
        { id: 5, src: 'https://via.placeholder.com/400x300', alt: 'Image 5' },
        { id: 6, src: 'https://via.placeholder.com/400x300', alt: 'Image 6' }
      ]
    }
  }
}
</script>

<style scoped>
.carousel-container {
  max-width: 50%;
  margin: 0 auto;
  padding: 1rem;
}

/* Additional styles can be added here */
</style>
