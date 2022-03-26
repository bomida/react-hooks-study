import { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  },
  {
    tab: "Section 3",
    content: "I'm the content of the Section 3"
  },
  {
    tab: "Section 4",
    content: "I'm the content of the Section 4"
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  // 🚨 React Hook "useState" is called conditionally...라는 오류가 뜨면 
  // useState를 최상단으로 옮겨주자!
  // *최상위(at the Top Level)에서만 Hook을 호출해야 한다.
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  }
}


function UseTabs() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      <h1>useTab</h1>
      {content.map((section, index) =>
        <button
          key={index}
          onClick={() => changeItem(index)}>{section.tab}
        </button>
      )}
      <h3>{currentItem.content}</h3>
    </div>
  );
};

export default UseTabs;
