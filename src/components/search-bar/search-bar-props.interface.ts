export interface ISearchBarProps {
    city: string;
    loading: boolean;
    onCityChange: (value: string) => void;
    onSearch: () => void;   
}