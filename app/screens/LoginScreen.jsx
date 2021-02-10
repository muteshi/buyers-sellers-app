import { Formik } from "formik";
import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import AppButton from "../components/common/AppButton";
import AppPasswordInput from "../components/common/AppPasswordInput";
import AppTextInput from "../components/common/AppTextInput";
import Screen from "../components/common/Screen";

function LoginScreen(props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
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
            <AppButton title="Login" onPress={handleSubmit} />
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
