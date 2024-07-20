import "./Tag.css";

const Tag = ({tagName, selectTag, selected}) => {

  const tagStyle = {
    HTML: {backgroundColor: "#fda821"},
    CSS: {backgroundColor: "#800000"},
    JavaScript: {backgroundColor: "#008000"},
    React: {backgroundColor: "#AA336A"},
    default: {backgroundColor: "#000000"}
  }

  return (
    <button type="button"
    className="tag" 
    style={selected ? tagStyle[tagName] : tagStyle.default}
    onClick={() => selectTag(tagName)}
    >{tagName}</button>
  )
};

export default Tag;