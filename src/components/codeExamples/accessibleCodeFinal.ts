export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        {/* use aria-invalid to indicate field contain error */}
        aria-invalid={errors.name ? "true" : "false"}
        ref={register({ required: true, maxLength: 30 })}
      />
      {/* use role="alert" to announce the error message */}
      {
        errors.name 
        && errors.name.type === "required"
        && (
          <span role="alert">
            This is required
          </span>
        )
      }
      {
        errors.name 
        && errors.name.type === "maxLength"
        && (
          <span role="alert">
            Max length exceeded
          </span>
        )
      }
      <input type="submit" />
    </form>
  );
}
`
