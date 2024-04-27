import { ScholarTermsAggregationKey } from './ScholarTermsAggregationKey'

export const ScholarTermsAggregationLabels: Record<ScholarTermsAggregationKey, string> = {
  [ScholarTermsAggregationKey.Institution]: 'Institution',
  [ScholarTermsAggregationKey.Author]: 'Author Name',
  [ScholarTermsAggregationKey.Country]: 'Institution Country',
  [ScholarTermsAggregationKey.Dates]: 'Publication Dates',
  [ScholarTermsAggregationKey.Authors]: 'Authors'
}
