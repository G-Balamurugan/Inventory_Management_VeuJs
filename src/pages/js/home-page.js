import { useCounterStore } from '@/stores/counter'
import ApiCall from '@/components/ApiCall.vue'
import { storeToRefs } from 'pinia'

export default {
  components: {
    ApiCall
  },
  setup () {
    const counterStore = useCounterStore()

    const { count } = storeToRefs(counterStore) 

    const setCount = () => {
      counterStore.increment()
    }

    return {
      count,
      setCount
    }
  }
}
