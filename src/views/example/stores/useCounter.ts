import { defineStore } from 'pinia'

export default defineStore('example/counter', () => {
  // other options...
  const count = ref(0)
  function increment() {
    count.value += 1
  }
  return {
    count,
    increment,
  }
})
