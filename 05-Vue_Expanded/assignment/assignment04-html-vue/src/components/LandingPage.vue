<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">My Website</router-link>
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
            <li class="nav-item" v-for="(page, index) in pages" :key="index">
              <router-link class="nav-link" :to="page.path">{{ page.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Jumbotron -->
    <div class="jumbotron">
      <h1 class="display-4">{{ welcomeTitle }}</h1>
      <p class="lead">{{ leadText }}</p>
      <hr class="my-4" />
      <p v-if="showInfo">{{ infoText }}</p>
      <p v-else>No additional information available.</p>
      <button class="btn btn-primary btn-lg" v-b-tooltip.hover title="This button does nothing">
        Learn more
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      welcomeTitle: 'Welcome to My Website',
      leadText: 'This is a simple landing page using Bootstrap.',
      infoText: 'Use the navigation bar to explore different pages.',
      showInfo: true,
      pages: [
        { name: 'Home', path: '/' },
        { name: 'Images', path: '/images' },
        { name: 'Accordion', path: '/accordion' },
        { name: 'Grid', path: '/grid' }
      ]
    }
  }
}
</script>

<style scoped>
.jumbotron {
  background-color: #e9ecef;
  padding: 2rem;
  border-radius: 0.3rem;
  text-align: center;
}
</style>
