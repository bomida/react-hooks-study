import { useState, useEffect } from 'react';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title]);
  return setTitle;
}

function UseTitle() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("Home")
  }, 3000);

  return (
    <div>
      <h1>useTitle</h1>
    </div>
  );
}

export default UseTitle;
