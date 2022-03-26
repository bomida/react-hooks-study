import UseInput from './useInput';
import UseTabs from './useTab';
import UseTitle from './useTitle';
import UseClick from './useClick';
import UseConfirm from './useConfirm';
import UsePreventLeave from './usePreventLeave';
import UseBeforeLeave from './useBeforeLeave';
import UseFadeIn from './useFadeIn';
import UseNetwork from './useNetwork';
import UseScroll from './useScroll';
import UseFullscreen from './useFullscreen';
import UseNotification from './useNotification';
import UseAxios from './useAxios';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseAxios />
      <hr />
      <UseNotification />
      <hr />
      <UseFullscreen />
      <hr />
      <UseNetwork />
      <hr />
      <UseFadeIn />
      <hr />
      <UseBeforeLeave />
      <hr />
      <UsePreventLeave />
      <hr />
      <UseConfirm />
      <hr />
      <UseClick />
      <hr />
      <UseTitle />
      <hr />
      <UseTabs />
      <hr />
      <UseInput />
      <hr />
      {/* <UseScroll /> */}
    </div>
  );
}

export default App;
