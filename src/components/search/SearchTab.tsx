import { useLensStore } from '../../store'

export function SearchTab({ children, type, ...props }: any) {
  const { searchType, setSearchType } = useLensStore()
  const active = searchType === type
  return (
    <div
      {...props}
      onClick={() => setSearchType(type)}
      className={`border py-2 px-4 mr-2 cursor-pointer border-b-white hover:text-blue-500 ${active && 'text-blue-500'}`}
    >
      {children}
    </div>
  )
}
