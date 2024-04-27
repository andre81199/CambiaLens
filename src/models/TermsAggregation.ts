import { Bucket } from './Bucket'

export interface TermsAggregation {
  doc_count_error_upper_bound: number
  sum_other_doc_count: number
  buckets: Bucket[]
}
