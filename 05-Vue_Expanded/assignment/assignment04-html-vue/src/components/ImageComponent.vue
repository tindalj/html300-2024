<template>
    <div>
      <img
        :src="src"
        :alt="alt"
        :title="title"
        :class="{ 'border': hasBorder }" 
        @click="toggleBorder" 
        class="img-fluid rounded" 
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageComponent',
    props: {
      src: {
        type: String,
        required: true // Ensure src is a required prop
      },
      alt: {
        type: String,
        required: true // Ensure alt text is provided
      },
      title: {
        type: String,
        default: 'Image Title' // Default value for title
      }
    },
    data() {
      return {
        hasBorder: false // State to track if the border is applied
      }
    },
    methods: {
      toggleBorder() {
        this.hasBorder = !this.hasBorder; // Toggle the border state
      }
    }
  }
  </script>
  
  <style scoped>
  .border {
    border: 2px solid #007bff; /* Custom border style */
  }
  </style>