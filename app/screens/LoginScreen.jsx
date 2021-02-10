import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/common/Screen";
import {
  AppForm as Form,
  AppFormField as Field,
  SubmitButton as Button,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email Address"),
  password: Yup.string().required().min(6).label("Password"),
});

function LoginScreen(props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <Field
          fieldName="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="envelope-o"
          keyboardType="email-address"
          placeholder="Email address"
          textContentType="emailAddress"
        />
        <Field
          autoCapitalize="none"
          autoCorrect={false}
          onPress={() => setShowPassword(!showPassword)}
          showPassword={showPassword}
          icon="lock"
          fieldName="password"
          placeholder="Password"
          secureTextEntry={!showPassword}
          textContentType="password"
        />
        <Button buttonName="Login" />
      </Form>
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
