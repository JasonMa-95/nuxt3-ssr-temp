import { defineStore } from 'pinia'

const USER_INFO = {
  userName: 'JasonMa',
  id: 1,
  sex: '男',
  age:18
}

export const useUserStore = defineStore('user', () => {

  const userInfo = reactive(USER_INFO)

  return {
    userInfo,
  }
})