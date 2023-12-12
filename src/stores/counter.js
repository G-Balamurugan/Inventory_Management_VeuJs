import { defineStore } from 'pinia'
// import { ref, computed } from 'vue'

// Composition API
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const getCount = computed(() => count.value)
//   function increment() {
//     count.value++
//   }

//   return { count, getCount, increment }
// })

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0
  }),
  actions: {
    increment () {
      this.count++
    }
  }
})
