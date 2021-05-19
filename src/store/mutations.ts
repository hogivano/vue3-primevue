export default {
  SET_IS_AUTHEN: (state: any, isAuthen: boolean) => {
    state.authenticated.isAuthen = isAuthen
  },
  SET_DATE_AUTHEN: (state: any, dateAuthen: string) => {
    state.authenticated.dateAuthen = dateAuthen
  },
  SET_CONNECTION: (state: any, connection: boolean) => {
    state.network.connection = connection
  },
  SET_CONNECTION_TYPE: (state: any, connectionType: string) => {
    state.network.connectionType = connectionType
  },
  SET_NO_INTERNET_MODAL: (state: any, noInternet: boolean) => {
    state.network.noInternetModal = noInternet
  },
  SET_PLATFORM: (state: any, platform: string) => {
    state.device.platform = platform
  },
  SET_IS_WEB: (state: any, web: boolean) => {
    state.device.isWeb = web
  },
  SET_IS_MOBILE: (state: any, mobile: boolean) => {
    state.device.isMobile = mobile
  },
  SET_IS_ANDROID: (state: any, android: boolean) => {
    state.device.isAndroid = android
  },
  SET_IS_IOS: (state: any, ios: boolean) => {
    state.device.isIos = ios
  },
  SET_SHOW_LOADER: (state: any, show: boolean) => {
    state.loading.show = show
  }
}
