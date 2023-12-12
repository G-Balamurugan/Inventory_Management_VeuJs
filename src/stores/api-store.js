import { defineStore } from 'pinia'
import testAPI from '@/api/test-api'

export const useApiTestStore = defineStore({
  id: 'api-test',
  state: () => ({
    text: '',
    postText: '',
    texts: []
  }),
  actions: {
    async getTextData ({ query }) {
      return testAPI.getDataByAPI(query)
        .then(res => {
          this.text = res.body.data.text
          return res
        })
    },
    async postTextData (data) {
      testAPI.postDataViaAPI(data)
        .then(res => {
          this.postText = res.body.data.text
          this.texts = res.body.data.list
          console.log(this.postText)
          console.log(this.texts)
          return res
        })
    }
  }
})