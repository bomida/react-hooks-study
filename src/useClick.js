import { useEffect, useRef } from 'react';


const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    // ๐จ  Hook ์ ์กฐ๊ฑด๋ฌธ, ๋ฐ๋ณต๋ฌธ, ์ค์ฒฉํจ์ ๋ด์์ ํธ์ถํ  ์ ์๋ค.
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
    <div>
      <h1 ref={title}>useClick</h1>
    </div>
  );
}

export default UseClick;
