import './search.css'
import { BsSearch } from 'react-icons/bs'

interface SearchProps {
  placeholder?: string
  name: string
}

const Search: React.FC<SearchProps> = ({
  placeholder = 'Search',
  name = 'search',
}) => {
  return (
    <div className="search-input">
      <BsSearch color="white" size={20} />
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="w-full h-10 px-3 rounded-lg bg-bg text-white"
      />
    </div>
  )
}

export default Search
