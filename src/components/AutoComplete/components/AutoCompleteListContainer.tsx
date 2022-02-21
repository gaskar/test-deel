import { AutoCompleteListItem } from "./AutoCompleteListItem";
import "./AutoCompleteListContainer.css";

export const AutoCompleteListContainer = (
    {listItems, searchTerm, onItemSelect}: 
    {listItems: string[], searchTerm: string, onItemSelect: Function}
    ) => {

    const handleItemClick: Function = (value: any) => {
        onItemSelect(value);
    };

    return (
        <ul className="items-container" data-testid="items-container">
            {listItems.map((item) => {
                return (
                    <AutoCompleteListItem 
                        key={item}
                        value={item} 
                        searchTerm={searchTerm}
                        onItemClick={handleItemClick} />
                );
            })}
        </ul>
    );
}