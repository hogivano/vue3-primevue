import { App } from 'vue'
import ToastService from 'primevue/toastservice'

export default {
  install: (app: App < Element >) => {
    const vue = app
    vue.use(ToastService)
  }
}
