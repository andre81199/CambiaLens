import { HitSource } from './HitSource'
import { Highlight } from './Highlight'

export interface ScholarHit {
  highlight: Highlight
  score: number
  source: HitSource
}
