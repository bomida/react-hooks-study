import './App.css';

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  }
  const enablePreve = () => window.addEventListener("beforeunload", listener);
  const disablePreve = () => window.addEventListener("beforeunload", listener);
  return { enablePreve, disablePreve }
}

function App() {
  const { enablePreve, disablePreve } = usePreventLeave();

  return (
    <div className="App">
      <h1>usePreventLeave</h1>
      <button onClick={enablePreve}>Protect</button>
      <button onClick={disablePreve}>Unprotect</button>
    </div>
  );
}

export default App;
