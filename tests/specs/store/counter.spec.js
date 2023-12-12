import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import { describe } from 'vitest'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('Mutation', () => {
    test('setCounter', () => {
      const counterStore = useCounterStore()
      const newCount = 10
      counterStore.count = newCount
      expect(counterStore.count).toEqual(newCount)
    })
  })

  describe('Actions', () => {
    test('increment', () => {
      const counterStore = useCounterStore()
      expect(counterStore.count).toBe(0)
      counterStore.increment()
      expect(counterStore.count).toBe(1)
    })
  })
})
