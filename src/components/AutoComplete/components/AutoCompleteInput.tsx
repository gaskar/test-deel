import React, { FocusEventHandler } from "react";

import "./AutoCompleteInput.css";

export const AutoCompleteInput = (
    {searchTerm, onValueChange, onFocus, onBlur}: 
    {searchTerm: string, onValueChange: Function, onFocus: FocusEventHandler, onBlur: FocusEventHandler}
) => {
    return (
        <input 
            value={searchTerm} 
            onFocus={onFocus} 
            onBlur={onBlur} 
            type="text" 
            aria-label="search-text-input"
            onChange={
                (e) => {
                    onValueChange(e.target.value);
             }
            } />
    )
}