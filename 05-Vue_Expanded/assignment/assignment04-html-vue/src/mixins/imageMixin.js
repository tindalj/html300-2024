export default {
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