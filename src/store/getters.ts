export default {
  getAuthenticated: (state: any) => state.authenticated,
  getIsAuthen: (state: any) => state.authenticated.isAuthen,
  getDateAuthen: (state: any) => state.authenticated.dateAuthen,
  getConnectionNetwork: (state: any) => state.network.connection,
  getConnectionTypeNetwork: (state: any) => state.network.connectionType,
  getNoInternetModalNetwork: (state: any) => state.network.noInternetModal,
  getPlatform: (state: any) => state.device.platform,
  getIsWeb: (state: any) => state.device.isWeb,
  getIsMobile: (state: any) => state.device.isMobile,
  getIsIos: (state: any) => state.device.isIos,
  getIsAndroid: (state: any) => state.device.isAndroid,
  getShowLoader: (state: any) => state.loading.show
}
