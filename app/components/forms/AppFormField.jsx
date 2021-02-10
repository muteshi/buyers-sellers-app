import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../common/AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ fieldName, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(fieldName)}
        onBlur={() => setFieldTouched(fieldName)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[fieldName]} error={errors[fieldName]} />
    </>
  );
}

export default AppFormField;
