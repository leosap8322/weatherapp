import type { ISearchBarProps } from "./search-bar-props.interface";

function SearchBar({
    city, 
    loading,
    onCityChange, 
    onSearch, 
    }: ISearchBarProps) {
        return (
        <div className="flex items-center space-x-4">
            <input className="flex-1 px-4 py-2 rounded-lg border bg-gray-200 focus:ring-2" focus:outline-none focus:ring-blue-500 placeholder="Enter city..."
                type="text" 
                value={city}
                onChange={(e) => onCityChange(e.target.value)} 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onSearch();
                    }
                }}
            />
            <button className="px-4 py-2 rounded-lg  bg-blue-600  text-white border hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={onSearch} 
                disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
            </button>
        </div>  
    );
} export default SearchBar;