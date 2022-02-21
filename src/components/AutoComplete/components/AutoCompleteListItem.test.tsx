import { render, fireEvent } from '@testing-library/react';
import { AutoCompleteListItem } from "./AutoCompleteListItem";


const setup = async (searchTerm = "", value = "") => {
    const onItemClick = jest.fn();

    const utils = render(<AutoCompleteListItem searchTerm={searchTerm} value={value} onItemClick={onItemClick} />)
    const row = await utils.findByLabelText("item-row");;

    return {
        searchTerm,
        value,
        onItemClick,
        row
    };
}


test("value should be rendered in row", async () => {

    const { row, value } = await setup("test", "value");

    expect(row.textContent).toBe(value);
});

test("onItemClick should be called on mousedown event on row item", async () => {
    const { row, value, onItemClick } = await setup("test", "value");

    fireEvent.mouseDown(row);

    expect(onItemClick).toHaveBeenCalledWith(value);
})

