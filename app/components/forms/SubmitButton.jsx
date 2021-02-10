import { useFormik, useFormikContext } from "formik";
import React from "react";
import AppButton from "../common/AppButton";

function SubmitButton({ buttonName }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={buttonName} onPress={handleSubmit} />;
}

export default SubmitButton;
