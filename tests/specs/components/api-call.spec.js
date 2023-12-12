import { describe, expect } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { useApiTestStore } from '@/stores/api-store'
import { shallowMount } from '@vue/test-utils'
import ApiCall from '@/components/ApiCall.vue'

describe('ApiCall.vue', () => {
  describe('API Test Button Components', () => {
    test('Test API Get button', () => {
      const wrapper = shallowMount(ApiCall, {
        global: {
          plugins: [
            createTestingPinia()
          ]
        }
      })
      const apiTestStore = useApiTestStore()
      const getAPIButton = wrapper.find('#testAPIGet')
      getAPIButton.trigger('click')
      expect(apiTestStore.getTextData).toHaveBeenCalled(1)
    })

    test('Test API Post Button', async () => {
      const wrapper = shallowMount(ApiCall, {
        global: {
          plugins: [
            createTestingPinia()
          ]
        }
      })
      const apiTestStore = useApiTestStore()
      const postAPIButton = wrapper.find('#testAPIPost')
      postAPIButton.trigger('click')
      expect(apiTestStore.postTextData).toHaveBeenCalled()
    })
  })
})
