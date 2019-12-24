export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        {/* use aria-invalid to indicate field contain error */}
        aria-invalid={errors.name ? 'true' : 'false'}
        {/* use aria-describedby to associate with error messages */}
        aria-describedby="error-name-required error-name-maxLength"
        ref={register({ required: true, maxLength: 30 })}
      />
      {errors.name && errors.name.type === "required" && (
        {/* the id field is used to associated with aria-describedby*/}
        <span role="alert" id="error-name-required">
          This is required
        </span>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <span role="alert" id="error-name-maxLength">
          Max length exceeded
        </span>
      )}
      <input type="submit" />
    </form>
  );
}
`
