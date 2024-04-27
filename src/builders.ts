import { PatentDocument } from './models/PatentDocument'
import { PatentHit } from './models/PatentHit'

export function buildScholarHit() {
  return { source: { record_lens_id: 's1' } }
}

export function buildPatentHit(doc: Partial<PatentDocument> = {}): PatentHit {
  return {
    document: {
      record_lens_id: 'p1',
      legal_status: {
        patent_status: 'INACTIVE'
      },
      ...doc
    }
  } as PatentHit
}
