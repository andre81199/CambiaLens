import { IprType } from './IprType'
import { PatentLegalStatus } from './PatentLegalStatus'

export interface LegalStatus {
  ipr_type: IprType
  earliest_filing_date: Date
  patent_status: PatentLegalStatus
  publication_count: number
  granted?: boolean
  grant_date?: Date
  anticipated_term_date?: Date
  application_expiry_date?: Date
  discontinuation_date?: Date
}
