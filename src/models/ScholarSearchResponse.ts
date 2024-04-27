import { Aggregation } from './Aggregation'
import { Metadatum } from './Metadatum'
import { JoinStats } from './JoinStats'
import { TotalRelation } from './TotalRelation'
import { ScholarTermsAggregationKey } from './ScholarTermsAggregationKey'
import { ScholarHit } from './ScholarHit'

export interface ScholarSearchResponse {
  queryId: string
  totalHits: number
  totalRelation: TotalRelation
  hits: ScholarHit[]
  metadata: { [key: string]: Metadatum }
  joinStats: JoinStats
  aggregations: Record<ScholarTermsAggregationKey, Aggregation>
}
