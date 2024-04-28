import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from './ui/Button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/DropdownMenu'
import { BarChart4, Ellipsis } from 'lucide-react'
import { TermsAggregation } from '../models/TermsAggregation'

export interface FacetFilterGroupProps {
  aggregation: TermsAggregation
  label: string
}

export function FacetFilter({ aggregation }: { aggregation: TermsAggregation }) {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [refineClicked, setRefineClicked] = useState<boolean>(false)
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({})

  // Event handler for refine click
  const handleRefineClick = () => {
    setRefineClicked(true)
  }

  // Event handler for clearing checked items
  const handleClearClick = () => {
    setCheckedItems({})
    setRefineClicked(false)
  }

  // Event handler for checkbox change
  const handleCheckboxChange = (key: string) => {
    setCheckedItems({ ...checkedItems, [key]: !checkedItems[key] })
  }

  // Place holder function for handlingd load more action
  const handleLoadMore = () => {
    console.log('Load more clicked')
  }

  // Filterd buckets based on search
  const filteredBuckets = aggregation?.buckets?.filter((bucket) =>
    bucket.key.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className={'p-2'}>
      {/* Search input field */}
      <input
        className="mb-1.5 px-3 py-2 border border-grey-2 w-full placeholder:text-left "
        placeholder={`Search...`}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ textAlign: 'left' }}
      />

      {/* Display filtered buckets */}
      {filteredBuckets.map((bucket) => {
        return (
          <FacetFilterItem
            key={bucket.key}
            bucket={bucket}
            checked={checkedItems[bucket.key] || false}
            onChange={() => handleCheckboxChange(bucket.key)}
          />
        )
      })}

      {/* Load more button */}
      <span className="flex text-sm hover:text-teal-600" onClick={handleLoadMore}>
        <Ellipsis className="pr-1"></Ellipsis> Load More
      </span>

      {/* Buttons for refine and clear */}
      <div className="flex justify-between align-middle py-2 w-full">
        <div className="flex">
          {refineClicked && (
            <Button size="sm" variant={'destructive'} className="mr-2" onClick={handleClearClick}>
              {t('Clear')}
            </Button>
          )}
          <Button size="sm" onClick={handleRefineClick}>
            {t('Refine')}
          </Button>
        </div>

        {/* Dropdown to view facet analysis */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="ellipsis dropdown">
              <Ellipsis className="h-[1.5rem] w-[1.5rem] text-sky-600" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <span className="flex align-middle hover:text-sky-500">
                <BarChart4 className="h-[1rem] w-[1rem] mr-2"></BarChart4>
                {t('View Facet Analysis')}
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export function FacetFilterItem({
  bucket,
  checked,
  onChange
}: {
  bucket: any
  checked: boolean
  onChange: () => void
}) {
  return (
    <label
      className="flex text-sm small cursor-pointer py-1 hover:bg-slate-100 dark:hover:bg-slate-900"
      key={bucket.key}
    >
      <span className="mr-1">
        <input type="checkbox" checked={checked} onChange={onChange} />
      </span>
      <span className="flex-1">{bucket.key.replaceAll('_', ' ')}</span>
      <span className="justify-self-end text-teal-600">({bucket.doc_count.toLocaleString()})</span>
    </label>
  )
}
