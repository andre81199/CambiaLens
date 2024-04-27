import { HttpHandler, HttpResponse, http } from 'msw'

import SCHOLAR_RESPONSE from '@/fixtures/articles.json'
import PATENTS_RESPONSE from '@/fixtures/patents.json'
import PATENT_FACETS from '@/fixtures/patent-facets.json'
import SCHOLAR_FACETS from '@/fixtures/scholar-facets.json'
import { API_BASE, SearchType } from '@/api'
import { PatentTermsAggregationKey } from '@/models/PatentTermsAggregationKey'
import { ScholarTermsAggregationKey } from '@/models/ScholarTermsAggregationKey'
import { PatentHit } from '@/models/PatentHit'
import { ScholarHit } from '@/models/ScholarHit'

const mergeResponses = (a: any, b: any) => ({
  ...a,
  aggregations: b.aggregations
})

export const getTestPatent = () => PATENTS_RESPONSE.hits[0] as unknown as PatentHit
export const getTestScholarlyWork = () => SCHOLAR_RESPONSE.hits[0] as unknown as ScholarHit

export const getScholarSearchHandler = () =>
  http.post(`${API_BASE}/api/search/scholar`, async (_req) => {
    console.log(await _req.request.json())
    return HttpResponse.json(mergeResponses(SCHOLAR_RESPONSE, SCHOLAR_FACETS))
  })

export const getPatentSearchHandler = () =>
  http.post(`${API_BASE}/api/search/patent`, () => HttpResponse.json(mergeResponses(PATENTS_RESPONSE, PATENT_FACETS)))

const getParameters = (handlers: HttpHandler[]) => ({ msw: { handlers } })

export const getDefaultTestParameters = () => getParameters([getPatentSearchHandler(), getScholarSearchHandler()])

export const getTestAggregation = (type: SearchType, key: ScholarTermsAggregationKey | PatentTermsAggregationKey) => {
  if (type === SearchType.PATENT) {
    return PATENT_FACETS.aggregations[key]
  } else {
    return SCHOLAR_FACETS.aggregations[key]
  }
}
