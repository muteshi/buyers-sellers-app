import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/common/AppButton";
import AppPasswordInput from "../components/common/AppPasswordInput";
import AppTextInput from "../components/common/AppTextInput";
import Screen from "../components/common/Screen";
import AppText from "../components/common/AppText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email Address"),
  password: Yup.string().required().min(6).label("Password"),
});

function LoginScreen(props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("email")}
              icon="envelope-o"
              keyboardType="email-address"
              placeholder="Email address"
              textContentType="emailAddress"
            />
            <AppText style={{ color: "red" }}>{errors.email}</AppText>
            <AppPasswordInput
              onPress={() => setShowPassword(!showPassword)}
              showPassword={showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("password")}
              icon="lock"
              placeholder="Password"
              secureTextEntry={!showPassword}
              textContentType="password"
            />
            <AppText style={{ color: "red" }}>{errors.password}</AppText>
            <AppButton title="Login" onPress={handleSubmit} disabled={errors} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
