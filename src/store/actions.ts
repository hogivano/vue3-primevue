import network from '@/plugins/system/network'
import { infoDevice } from '@/plugins/system/device'

export default {
  setIsAuthenAuthenticated: ({ commit }: any, isAuthen: boolean) => {
    commit('SET_IS_AUTHEN', isAuthen)
  },
  setDateAuthenAuthenticated: ({ commit }: any, dateAuthen: string) => {
    commit('SET_DATE_AUTHEN', dateAuthen)
  },
  setNoInternet: ({ commit }: any, noInternet: boolean) => {
    commit('SET_NO_INTERNET_MODAL', noInternet)
  },
  watchConnection: ({ commit }: any) => {
    network.addListener('networkStatusChange', (status) => {
      commit('SET_CONNECTION', status.connected)
      commit('SET_CONNECTION_TYPE', status.connectionType)

      if (!status.connected) {
        commit('SET_NO_INTERNET_MODAL', true)
      }
    })
  },
  initNetwork: async ({ commit }: any) => {
    network.getStatus()
      .then((status) => {
        commit('SET_CONNECTION', status.connected)
        commit('SET_CONNECTION_TYPE', status.connectionType)
      })
  },
  initDevice: async ({ commit }: any) => {
    infoDevice().then((device) => {
      commit('SET_PLATFORM', device.platform)
      if (device.platform === 'web') {
        commit('SET_IS_WEB', true)
      }

      if (device.platform === 'ios' || device.platform === 'android') {
        commit('SET_IS_MOBILE', true)
        commit('SET_IS_ANDROID', (device.platform === 'android'))
        commit('SET_IS_IOS', (device.platform === 'ios'))
      }
    })
  },
  showLoading: ({ commit }: any) => {
    commit('SET_SHOW_LOADER', true)
  },
  hideLoading: ({ commit }: any) => {
    commit('SET_SHOW_LOADER', false)
  }
}
