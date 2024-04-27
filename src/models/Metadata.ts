import { LinkedIDS } from './LinkedIDS'
import { PatentCollection } from './PatentCollection'

export interface Metadata {
  linkedIds: LinkedIDS
  tags: any[]
  collections: PatentCollection[]
  notes: any[]
  inventorships: any[]
  privateCollections: any[]
  publicCollections: PatentCollection[]
  privateNotes: any[]
  landscapeCollections: PatentCollection[]
  landscapeNotes: any[]
}
