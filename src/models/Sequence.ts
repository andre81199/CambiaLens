import { Organism } from './Organism'

export interface Sequence {
  seq_list_key: string
  type: string[]
  length_bucket: string[]
  length: number[]
  organism: Organism[]
  document_location: string[]
  count: number
  data_source: string[]
}
