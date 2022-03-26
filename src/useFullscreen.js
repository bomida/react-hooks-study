import { useRef } from 'react';

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  }
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCacelFullscreen) {
      document.mozCacelFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
}

function UseFullscreen() {
  const onFulls = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  }
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  return (
    <div>
      <h1>useFullscreen</h1>
      <div ref={element}>
        <img src='https://image.bugsm.co.kr/uniContent/banner/VDCMPHFJB44Y5OEVPZVT/list_mobile.jpg' alt='lalaland' />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
}

export default UseFullscreen;
