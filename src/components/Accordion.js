import { useState } from "react";
const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      return setExpandedIndex(-1);
    }
    setExpandedIndex(nextIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = <span className="text-2xl">{isExpanded ? "👇" : "👉"}</span>;

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-5 items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
