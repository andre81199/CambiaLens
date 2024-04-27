import { PatentTermsAggregationKey } from './PatentTermsAggregationKey'
import { JoinStats } from './JoinStats.1'
import { TermsAggregation } from './TermsAggregation'
import { PatentHit } from './PatentHit'

export interface PatentSearchResponse {
  queryId: string
  totalHits: number
  totalRelation: string
  hits: PatentHit[]
  joinStats: JoinStats
  warnings: any[]
  aggregations: Record<PatentTermsAggregationKey, TermsAggregation>
}
