import { createApp } from 'vue'
import App from './App.vue'
import Card from './components/Card.vue'
import DeInput from './components/DeInput.vue'
import DeTextarea from './components/DeTextarea.vue'

const app = createApp(App)

app.component('de-input', DeInput)
app.component('card', Card)
app.component('de-textarea', DeTextarea)

app.config.unwrapInjectedRef = true;
app.mount('#app')
