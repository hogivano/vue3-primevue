import { App } from 'vue'
import toast from './ui/toast'
import primeComponent from './ui/primeComponent'
import confirmationService from './ui/confirmationService'

const definePlugin = (app: App<Element>) => {
  const vue = app
  vue.use(primeComponent)
  vue.use(toast)
  vue.use(confirmationService)
}

export default definePlugin
