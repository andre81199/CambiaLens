import { User } from './User'

export default interface Collection {
  id: number
  type: string
  title: string
  description: string
  access: string
  displayAvatar: boolean
  attested: boolean
  itemCount: number
  tags: any[]
  user: User
  notes: any[]
  sharedType: string
  hasLinkedSavedQueries: boolean
  savedQueries: any[]
  created: Date
  updated: Date
  lastEventDate: Date
}
