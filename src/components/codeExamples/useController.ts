export default `import React from "react";
import { TextField } from "@material-ui/core";
import { useController } from "react-hook-form";

function Input({ control, name }) {
  const {
    field: { ref, ...inputProps },
    state: { invalid, isTouched, isDirty },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return <TextField {...inputProps} inputRef={ref} />;
}
`
