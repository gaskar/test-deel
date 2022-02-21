import "./AutoCompleteListItem.css";

//TODO: move to separate file
export const Highlighted = ({ text = "", highlight = "" }) => {
    if(!highlight.trim()) return (<span>{text}</span>);

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return (
        <span>
        {parts.filter(String).map((part, i) => {
            return regex.test(part) ? (
            <b key={i}>{part}</b>
            ) : (
            <span key={i}>{part}</span>
            );
        })}
        </span>
    );
};


//TODO: change to click event from mousedown
//problem for now is that blur event is called before click, and click is not triggered
export const AutoCompleteListItem = (
    {value, onItemClick, searchTerm}: 
    {value: string, onItemClick: Function, searchTerm: string}) => {

    return (
        <li aria-label="item-row" onMouseDown={(e) => {
            onItemClick(value)
        }}>
            <Highlighted text={value} highlight={searchTerm} />
        </li>
    );
}