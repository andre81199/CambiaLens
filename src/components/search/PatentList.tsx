import { Link } from 'raviger'
import { PatentHit } from '../../models/PatentHit'
import { PatentSearchResponse } from '../../models/PatentSearchResponse'
import { PatentPills } from '../PatentPills'

export const getTitle = (hit: PatentHit) => hit.document.title?.en?.at(0)?.text || ''

export function PatentList({ response }: { response: PatentSearchResponse }) {
  return (
    <div className={'divide-y divide-solid border'}>
      {response?.hits.map((hit, i) => {
        const isEven = i % 2 === 0
        return <PatentListItem hit={hit} zebra={isEven} />
      })}
    </div>
  )
}

export function PatentListItem({ hit, zebra }: { hit: PatentHit; zebra?: boolean }) {
  const className = zebra ? '' : 'bg-slate-100 dark:bg-[#26323b]'
  return (
    <div key={hit.document.record_lens_id} className={`block p-3 cursor-pointer ${className}`}>
      <Link href={`/patent/${hit.document.record_lens_id}`}>
        <h4 className={'text-lg'}>{getTitle(hit)}</h4>
      </Link>
      <div className={'py-2'}>
        <PatentPills doc={hit.document} />
      </div>
      <div className={'capitalize py-2 text-sm'}>{hit.document.publication_type}</div>
      <div className={'py-2 text-sm'}>
        Published: {hit.document.date_published || hit.document.year_published || 'unknown'}
      </div>
      <div>
        <small>Inventors: </small>
        {hit.document.inventor?.map((inventor) => <small key={inventor.name}>{inventor.name} </small>)}
      </div>
      <div>
        <small>Applicants: </small>
        {hit.document.applicant?.map((applicant) => <small key={applicant.name}>{applicant.name} </small>)}
      </div>
    </div>
  )
}
