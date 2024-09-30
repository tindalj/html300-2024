<template>
    <header class="bg-light p-3 text-center"> <!-- Bootstrap classes for styling -->
      <h1>
        <slot name="title">Default Header Title</slot> <!-- Named slot with default value -->
      </h1>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent'
  }
  </script>
  