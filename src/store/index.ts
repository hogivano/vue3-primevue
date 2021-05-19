import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
import stateRoot from './state'
import mutationsRoot from './mutations'
import actionsRoot from './actions'
import gettersRoot from './getters'

const ls = new SecureLS({ encodingType: 'aes', isCompression: false, encryptionSecret: process.env.ENCRYPT_STORE || '3NCRYPTST0R3' })

export default createStore({
  state: stateRoot,
  getters: gettersRoot,
  mutations: mutationsRoot,
  actions: actionsRoot,
  plugins: [createPersistedState({
    key: process.env.KEY_STORE || 'KEY-STORE',
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    },
  })]
})
