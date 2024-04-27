import { PatentPills } from '@/components/PatentPills'
import { PatentDocument } from '@/models/PatentDocument'
import { useTranslation } from 'react-i18next'

export function ViewPatent({ patent }: { patent: PatentDocument }) {
  const { t } = useTranslation()
  return (
    <div className={'container mx-auto py-5'}>
      <h1 className={'text-xl mb-2'}>{patent.title?.en?.at(0)?.text || ''}</h1>
      <div>{patent.doc_key}</div>
      <p className={'capitalize py-2'}>{patent.publication_type}</p>
      <div className={'py-2'}>
        <PatentPills doc={patent} />
      </div>
      <div>
        {t('Published: ')} {patent.date_published || patent.year_published || 'unknown'}
      </div>
      <div>
        {t('Jurisdiction: ')} {patent.jurisdiction}
      </div>
      <div>
        {t('Applicants: ')}{' '}
        {patent.applicant.map((applicant) => (
          <small key={applicant.name}>{applicant.name} </small>
        ))}
      </div>
      <div>
        {t('Inventors: ')}
        {patent.inventor.map((inventor) => (
          <small key={inventor.name}>{inventor.name} </small>
        ))}
      </div>
      <pre className={'py-2'}>{JSON.stringify(patent, null, 2)}</pre>
    </div>
  )
}
