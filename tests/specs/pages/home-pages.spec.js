import { describe, expect } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { useCounterStore } from '@/stores/counter'
import { shallowMount } from '@vue/test-utils'
import HomePage from '@/pages/HomePage.vue'

describe('HomePage.vue', () => {
  describe('Button Components', () => {
    test('Click button', () => {
      const wrapper = shallowMount(HomePage, {
        global: {
          plugins: [
            createTestingPinia()
          ]
        }
      })
      const counterStore = useCounterStore()
      const countbutton = wrapper.find('#countButton')
      countbutton.trigger('click')
      expect(counterStore.increment).toHaveBeenCalled(1)
    })

    test('Increment counter when button clicked', async () => {
      const wrapper = shallowMount(HomePage, {
        global: {
          plugins: [
            createTestingPinia({
              stubActions: false,
              initialState: {
                counter: { count: 20 }
              }
            })
          ]
        }
      })
      const counterStore = useCounterStore()
      const countbutton = wrapper.find('#countButton')
      const count = counterStore.count
      countbutton.trigger('click')
      expect(counterStore.count).toEqual(count + 1)
    })
  })
})
