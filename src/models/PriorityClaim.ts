import { Jurisdiction } from './Jurisdiction'
import { Kind } from './Kind'

export interface PriorityClaim {
  jurisdiction: Jurisdiction
  doc_number: string
  kind: Kind
  date: Date
}
