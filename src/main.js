// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css'; // Assurez-vous que ce fichier existe et contient vos styles globaux

createApp(App).use(router).mount('#app');
