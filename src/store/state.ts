const authen = {
  isAuthen: false,
  dateAuthen: null
}

const loader = {
  show: false
}

const networking = {
  connection: false,
  connectionType: null,
  noInternetModal: false
}

const deviceType = {
  platform: 'web',
  isIos: false,
  isAndroid: false,
  isWeb: true,
  isMobile: false
}

const state = {
  authenticated: authen,
  network: networking,
  device: deviceType,
  loading: loader
}

export default state