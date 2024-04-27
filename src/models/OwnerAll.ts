import { Jurisdiction } from './Jurisdiction'

export interface OwnerAll {
  name: string
  address: string
  country: Jurisdiction
  sequence: number
  recorded_date: Date
  execution_date: Date
  is_current_owner: boolean
}
