import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../common/AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { View } from "react-native";

function AppFormField({ fieldName, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <View style={{ width }}>
      <AppTextInput
        onChangeText={handleChange(fieldName)}
        onBlur={() => setFieldTouched(fieldName)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[fieldName]} error={errors[fieldName]} />
    </View>
  );
}

export default AppFormField;
