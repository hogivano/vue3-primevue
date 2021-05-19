import { App } from 'vue'
import ConfirmationService from 'primevue/confirmationservice'

export default {
  install: (app: App < Element >) => {
    const vue = app
    vue.use(ConfirmationService)
  }
}
