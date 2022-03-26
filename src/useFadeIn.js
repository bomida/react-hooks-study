import { useEffect, useRef } from 'react';


const useFadeIn = (duration = 1, delay = 0) => {
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  const element = useRef();
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
}


function UseFadeIn() {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(2, 4);
  return (
    <div>
      <h1 {...fadeInH1}>useFadeIn</h1>
      <p {...fadeInP}>There are many variations of passages of Lorem Ipsum available, but the majority</p>
    </div>
  );
}

export default UseFadeIn;
