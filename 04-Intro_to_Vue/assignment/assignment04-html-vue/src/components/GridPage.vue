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
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="images.html">Images</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="accordion.html">Accordion</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="grid.html">Grid</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Grid Layout -->
    <div class="container my-4">
      <h2 class="text-center mb-4">Bootstrap Grid System</h2>
      <div class="row">
        <div
          v-for="(item, index) in gridItems"
          :key="index"
          class="col-12 col-md-6 col-lg-4 grid-item"
        >
          <p>{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarOpen: false,
      gridItems: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5', 'Column 6']
    }
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen
    }
  }
}
</script>

<style>
.grid-item {
  background-color: #bf0861;
  border: 1px solid #07157d;
  border-radius: 0.25rem;
  padding: 1rem;
  text-align: center;
  margin-bottom: 1rem;
}
</style>
