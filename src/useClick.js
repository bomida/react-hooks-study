import { useEffect, useRef } from 'react';


const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    // 🚨  Hook 을 조건문, 반복문, 중첩함수 내에서 호출할 수 없다.
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    }
  }, []);
  return typeof onClick !== "function" ? element : undefined;;
}

function UseClick() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>useClick</h1>
    </div>
  );
}

export default UseClick;
