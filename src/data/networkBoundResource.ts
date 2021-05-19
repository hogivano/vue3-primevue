import store from '@/store'
import { Response } from '@/domain/entities'

abstract class NetworkBoundResource {
  private result = async (haveLocal: boolean) => {
    const data = new Response()
    if (store.state.network.connection) {
      try {
        const fetch = await this.fetchData().run()
        const code = fetch.status
        const result = fetch.data
        if (code === 201) {
          data.result = fetch.data
          data.message = fetch.data.Detail
        } else if (code === 200) {
          // eslint-disable-next-line no-prototype-builtins
          if (typeof result.value === 'object' || Array.isArray(result.value)) {
            data.result = result.value
          } else {
            data.result = result
          }
          data.message = 'berhasil ditampilkan'
        } else {
          data.result = fetch.data.value
        }
        data.code = fetch.status
      } catch (e) {
        data.error = true
        data.message = e.message
        data.code = (e.response) ? e.request.status : 500
      }
      if (haveLocal) {
        this.saveResultData(data)
      }
    } else if (haveLocal) {
      data.result = await this.loadFromDB()
    }

    return data
  }

  abstract loadFromDB(): any

  abstract fetchData(): any

  abstract saveResultData(data: any): void

  getResult = async (haveLocal: boolean) : Promise<Response> => {
    const data = await this.result(haveLocal)
    return data
  }
}

export default NetworkBoundResource
