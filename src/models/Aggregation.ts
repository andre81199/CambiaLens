import { DateHistogramAggregation } from './DateHistogramAggregation'
import { TermsAggregation } from './TermsAggregation'

export type Aggregation = DateHistogramAggregation | TermsAggregation
