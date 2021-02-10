import { useFormikContext } from "formik";
import React from "react";
import ErrorMessage from "./ErrorMessage";
import AppPicker from "../common/AppPicker";

function AppFormPicker({ items, name, placeholder, ...otherProps }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        {...otherProps}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
