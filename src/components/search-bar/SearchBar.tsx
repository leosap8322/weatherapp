import type { ISearchBarProps } from "./search-bar-props.interface";

function SearchBar({
    city, 
    onCityChange, 
    onSearch, 
    loading}: ISearchBarProps) {
        return (
        <input value={city} />
    );
}