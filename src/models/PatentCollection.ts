import { Access } from './Access'
import { CollectionType } from './CollectionType'
import { Note } from './Note'
import { SharedType } from './SharedType'
import { User } from './User'

export interface PatentCollection {
  id: number
  type: CollectionType
  title: string
  description: string
  access: Access
  displayAvatar: boolean
  attested: boolean
  itemCount: number
  tags: any[]
  user: User
  notes: Note[]
  sharedType: SharedType
  hasLinkedSavedQueries: boolean
  savedQueries: any[]
  created: Date
  updated: Date
  lastEventDate: Date
}
