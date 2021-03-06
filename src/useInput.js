import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const value = event.target.value;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange }
};

function UseInput() {
  const maxLeng = (value) => !value.includes("@");
  const name = useInput("Miss.", maxLeng);
  return <div>
    <h1>useInput</h1>
    <input placeholder="Name" {...name} />
  </div>
}

export default UseInput;