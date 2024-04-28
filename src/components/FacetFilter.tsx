import { Button } from './ui/Button'
import { TermsAggregation } from '../models/TermsAggregation'
import { useTranslation } from 'react-i18next'
import { Ellipsis } from 'lucide-react'
import { useState } from 'react'

export interface FacetFilterGroupProps {
  aggregation: TermsAggregation
  label: string
}

export function FacetFilter({ aggregation }: { aggregation: TermsAggregation }) {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleLoadMore = () => {
    console.log('Load more clicked')
  }

  const handleEllipsis = () => {
    console.log('Ellipsis clicked')
  }

  const filteredBuckets = aggregation?.buckets?.filter((bucket) =>
    bucket.key.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className={'p-2'}>
      <input
        className="mb-1.5 px-3 py-2 border border-grey-2 w-full placeholder:text-left "
        placeholder={`Search...`}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ textAlign: 'left' }}
      />
      {filteredBuckets.map((bucket) => {
        return <FacetFilterItem bucket={bucket} />
      })}
      <span className="flex text-sm hover:text-teal-600" onClick={handleLoadMore}>
        <Ellipsis className="pr-1"></Ellipsis> Load More
      </span>
      <div className="flex justify-between align-middle py-2 w-full">
        <Button size="sm">{t('Refine')}</Button>
        <button className="text-sky-600 justify-between" onClick={handleEllipsis}>
          <Ellipsis className="h-[1.5rem] w-[1.5rem]" />
        </button>
      </div>
    </div>
  )
}

export function FacetFilterItem({ bucket }: { bucket: any }) {
  return (
    <label
      className="flex text-sm small cursor-pointer py-1 hover:bg-slate-100 dark:hover:bg-slate-900"
      key={bucket.key}
    >
      <span className="mr-1">
        <input type="checkbox" />
      </span>
      <span className="flex-1">{bucket.key.replaceAll('_', ' ')}</span>
      <span className="justify-self-end text-teal-600">({bucket.doc_count.toLocaleString()})</span>
    </label>
  )
}
