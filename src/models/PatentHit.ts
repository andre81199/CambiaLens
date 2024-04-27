import { Metadata } from './Metadata'
import { PatentDocument } from './PatentDocument'

export interface PatentHit {
  displayKey: string
  document: PatentDocument
  metadata: Metadata
  highlight: { [key: string]: string[] }
}
