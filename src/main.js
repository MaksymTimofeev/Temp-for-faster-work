// import './assets/styles/reset.css';
// import './assets/styles/main.scss';
// import '../src/assets/styles/css/style-main.css';

// import './assets/styles/css/header.css';
// import './assets/styles/css/main.css';
// import './assets/styles/css/footer.css';
// import './assets/styles/css/header-mobile.css';
// import './assets/styles/css/main-mobile.css';
import './assets/styles/css/style.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
