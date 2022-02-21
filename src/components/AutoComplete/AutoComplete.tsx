import { useState } from "react"; 

import { AutoCompleteInput } from "./components/AutoCompleteInput";
import { AutoCompleteListContainer } from "./components/AutoCompleteListContainer";
import "./AutoComplete.css";

//TODO: add context to save value and search term
const AutoComplete =  (
    {listItems, onSearchTermChange, onItemSelected}: 
    {listItems: string[], onSearchTermChange: Function, onItemSelected: Function}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [showListContainer, setShowListContainer] = useState(false);

    const handleValueChange = (value: string) => {
        setSearchTerm(value);
        onSearchTermChange(value);
    }

    const handleInputFocus = () => {
        setShowListContainer(true);
    }

    const handleInputBlur = () => {
        setShowListContainer(false);
    }

    const handleItemSelect = (value: string) => {
        handleValueChange(value);
        onItemSelected(value);
        setShowListContainer(false);
    }

    return (
       <div className="main">

           <AutoCompleteInput 
                onValueChange={handleValueChange} 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}  
                searchTerm={searchTerm}
            />

            <div className={`${showListContainer && listItems.length ? "": "hide"}`}>
                <AutoCompleteListContainer
                    onItemSelect={handleItemSelect} 
                    listItems={listItems} 
                    searchTerm={searchTerm}      
                /> 
            </div>
       </div>
   )
}

export default AutoComplete;