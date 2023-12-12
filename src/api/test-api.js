import httpApi from '@/utils/http-api'
import { api } from '@/config'

export default {
  getDataByAPI: (query) => {
    return httpApi.getDataViaApi({
      url: api.testGetAPI.api,
      queryParams: query
    })
  },
  postDataViaAPI: (body) => {
    return httpApi.postDataViaApi({
      url: api.testPostAPI.api,
      body
    })
  }
}
