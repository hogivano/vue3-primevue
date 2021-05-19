import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const params = ref('hello here is testing params')
    const store = useStore()

    onMounted(() => {
      store.dispatch('initNetwork')
      store.dispatch('watchConnection')
    })
    return {
      params
    }
  }
}
