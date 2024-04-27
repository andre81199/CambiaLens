import { AccountType } from './AccountType'
import { Avatar } from './Avatar'

export interface User {
  id: number
  username: string
  firstName: string
  lastName: string
  created: Date
  displayName: string
  preferences?: string
  accountType: AccountType
  profilePictureKey?: string
  avatar?: Avatar
}
