/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import store from '@/store'
import http from '@/plugins/service/http'
import axios from '@/plugins/service/axios'
import { IRemote } from './iRemote'

// eslint-disable-next-line no-shadow
enum remoteEnum {
  get,
  post,
  put,
  delete,
  noAction
}

class Remote implements IRemote {
  method: remoteEnum

  endPoint: string

  header: any

  data: any

  constructor(method: remoteEnum, endPoint: string, data: any = null, header = {}) {
    this.method = method
    this.endPoint = endPoint
    this.header = header
    this.data = data

    if (store.state.authenticated.isAuthen) {
      this.header.authorization = `Bearer ${store.state.appActiveUser.token}`
      this.header.timeout = 5000
    }
  }

  get() {
    let remote = (this.header) ? axios.get(this.endPoint, {
      headers: this.header
    }) : axios.get(this.endPoint)
    if (store.state.device.isMobile) {
      remote = http.request({
        method: 'GET',
        url: this.endPoint,
        headers: this.header
      })
    }
    return remote
  }

  post() {
    let remote = axios.post(this.endPoint, this.data, {
      headers: this.header
    })
    if (store.state.device.isMobile) {
      remote = http.request({
        method: 'POST',
        url: this.endPoint,
        headers: this.header,
        data: this.data
      })
    }
    return remote
  }

  delete() {
    let remote = axios.delete(this.endPoint, {
      headers: this.header
    })
    if (store.state.device.isMobile) {
      remote = http.request({
        method: 'DELETE',
        url: this.endPoint,
        headers: this.header
      })
    }
    return remote
  }

  put() {
    let remote = axios.put(this.endPoint, this.data, {
      headers: this.header
    })
    if (store.state.device.isMobile) {
      remote = http.request({
        method: 'PUT',
        url: this.endPoint,
        headers: this.header
      })
    }
    return remote
  }

  run() {
    switch (this.method) {
      case remoteEnum.get:
        return this.get()
      case remoteEnum.post:
        return this.post()
      case remoteEnum.put:
        return this.put()
      case remoteEnum.delete:
        return this.delete()
      default:
        return []
    }
  }
}

export { Remote, remoteEnum }
