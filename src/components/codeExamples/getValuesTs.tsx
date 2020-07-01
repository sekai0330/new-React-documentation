export default `import React from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  test: string
  test1: string
}

export default function App() {
  const { register, getValues } = useForm<FormInputs>();

  return (
    <form>
      <input name="test" ref={register} />
      <input name="test1" ref={register} />

      <button
        type="button"
        onClick={() => {
          const values = getValues(); // { test: "test-input", test1: "test1-input" }
          const singleValue = getValues("test"); // "test-input"
          const singleValue = getValues(["test", "test1"]); 
          // { test: "test-input", test1: "test1-input" }
        }}
      >
        Get Values
      </button>
    </form>
  );
}`
