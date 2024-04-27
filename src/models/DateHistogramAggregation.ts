import { DateHistogramBucket } from './DateHistogramBucket'

export interface DateHistogramAggregation {
  buckets: DateHistogramBucket[]
}
