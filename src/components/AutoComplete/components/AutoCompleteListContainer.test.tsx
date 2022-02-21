import React from 'react';
import { render } from '@testing-library/react';
import { AutoCompleteListContainer } from "./AutoCompleteListContainer";


const setup = async (searchTerm = "") => {
    const onItemSelect = jest.fn();
    const listItems = ["test1", "test2", "test3"];

    const utils = render(<AutoCompleteListContainer searchTerm={searchTerm} listItems={listItems} onItemSelect={onItemSelect} />)
    const container = await utils.findByTestId("items-container");

    return {
        container,
        searchTerm,
        onItemSelect,
        listItems
    };
}


test("should render listItems", async () => {

    const { container, listItems } = await setup("test data");

    expect(container.textContent).toBe(listItems.join(""));
});



