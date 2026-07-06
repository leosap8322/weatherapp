export interface ISearchBarProps {
    city: string;
    onCityChange: (value: string) => void;
    onSearch: (city: string) => Promise<void>;
    loading: boolean;
}