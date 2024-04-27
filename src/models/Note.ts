import { SharedType } from './SharedType'
import { User } from './User'
import { CollectionType } from './CollectionType'

export interface Note {
  id: number
  type: string
  user: User
  text: string
  published: boolean
  created: Date
  updated: Date
  sharedType: SharedType
  collectionId: number
  collectionTitle: string
  collectionType: CollectionType
}
