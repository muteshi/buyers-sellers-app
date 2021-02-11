import { useFormikContext } from "formik";
import React from "react";
import ErrorMessage from "./ErrorMessage";
import AppPicker from "../common/AppPicker";
import { View } from "react-native";

function AppFormPicker({
  items,
  name,
  numberOfColumns = 1,
  PickerItemComponent,
  placeholder,
  width,
  ...otherProps
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <View style={{ width }}>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        {...otherProps}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppFormPicker;
