import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date().now());
  };
  useEffect(() => {
    axiosInstance(opts).then(data => {
      setState({
        ...state,
        loading: false,
        data
      });
    }).catch(error => {
      setState({ ...state, loading: false, error })
    });
  }, [trigger]);
  if (!opts.url) {
    return;
  }
  return { ...state, refetch };
}


function UseAxios() {
  const { loading, data, error, refetch } = useAxios({ url: "https://yts.mx/api/v2/list_movies.json" });
  console.log(`loading ${loading}\ndata${JSON.stringify(data)}\nerror${error}`)
  return (
    <div>
      <h1>useAxios</h1>
      <h3>{data && data.status}</h3>
      <h3>{loading && "Loading"}</h3>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default UseAxios;
