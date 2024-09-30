import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

// Import individual BootstrapVue components that are available
import { BButton } from 'bootstrap-vue-next';

const app = createApp(App);

// Globally register available components
app.component('BButton', BButton);

// Use router
app.use(router);

app.mount('#app');



