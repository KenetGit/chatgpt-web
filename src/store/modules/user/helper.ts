import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://raw.githubusercontent.com/KenetGit/chatgpt-web/main/src/assets/whalesDAO-avatar.png',
      name: '小鲸AI共享社区',
      description: '关注公众号 <a href="https://raw.githubusercontent.com/KenetGit/chatgpt-web/main/src/assets/qrcode_258.jpeg" class="text-blue-500" target="_blank" >whalesDAO</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
