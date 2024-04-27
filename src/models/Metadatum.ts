import Collection from './Collection'

export interface Metadatum {
  lensId: string
  tags: any[]
  collections: Collection[]
  notes: any[]
  authorship: any[]
  privateCollections: any[]
  publicCollections: Collection[]
}
