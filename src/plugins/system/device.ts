import { Plugins } from '@capacitor/core'

const { Device } = Plugins

const infoDevice = async () => {
  const info = await Device.getInfo()

  return info
}

const isWeb = async () => {
  const info = await infoDevice()

  if (info.platform === 'web') {
    return true
  }
  return false
}

const isMobile = async () => {
  const info = await infoDevice()

  if (info.platform === 'ios' || info.platform === 'android') {
    return true
  }
  return false
}

const isIos = async () => {
  const info = await infoDevice()

  if (info.platform === 'ios') {
    return true
  }
  return false
}

const isAndroid = async () => {
  const info = await infoDevice()

  if (info.platform === 'android') {
    return true
  }
  return false
}

export {
  infoDevice,
  isWeb,
  isMobile,
  isIos,
  isAndroid
}
