import type { ISearchBarProps } from "./search-bar-props.interface";

function SearchBar({
    city, 
    loading,
    onCityChange, 
    onSearch, 
    }: ISearchBarProps) {
        return (
        <>
            <input 
                type="text" 
                value={city}
                onChange={(e) => onCityChange(e.target.value)} 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onSearch();
                    }
                }}
            />
            <button 
                onClick={onSearch} 
                disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
            </button>
        </>  
    );
} export default SearchBar;