import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AutoCompleteInput } from "./AutoCompleteInput";


const setup = async (searchTerm = "") => {
    const onValueChange = jest.fn();
    const onBlur = jest.fn();
    const onFocus = jest.fn();

    const utils = render(<AutoCompleteInput searchTerm={searchTerm} onValueChange={onValueChange} onBlur={onBlur} onFocus={onFocus} />)
    const input = await utils.findByLabelText("search-text-input") as HTMLInputElement;;

    return {
        searchTerm,
        onValueChange,
        onBlur,
        onFocus,
        input
    };
}


test("value should be passed searchTerm argument", async () => {

    const { input, searchTerm } = await setup("test data");

    expect(input.value).toBe(searchTerm);
});


test("onValueChange should be called with right argument", async () => {

    const { input, onValueChange } = await setup();

    fireEvent.change(input, {target: {value: "23"}});
    expect(onValueChange).toHaveBeenCalledWith("23");
});


test("onFocus should be called when input is focused", async () => {

    const { input, onFocus } = await setup();

    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalled();
});


test("onBlur should be called when focus is left from input", async () => {
    const { input, onBlur } = await setup();

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
});
