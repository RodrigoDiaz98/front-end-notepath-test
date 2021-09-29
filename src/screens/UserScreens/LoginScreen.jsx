import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import {
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import {Button as KittenButton} from '@ui-kitten/components';
import { Icon, Button } from "react-native-elements";

const LoginScreenStyle = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-1",
    flex: 1,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 216,
    backgroundColor: "#533d8f",
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
    backgroundColor: '#533d8f',
    height: 60,
  },
  signUpButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
});

const LoginScreen = (props) => {
  const { navigation } = props;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const onSignUpButtonPress = () => {
    navigation.navigate('SignUp');
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const renderPasswordIcon = () => (
    <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      <Icon
        name={passwordVisible ? "eye-off" : "eye"}
        type="material-community"
      />
    </TouchableWithoutFeedback>
  );

  const renderEmailIcon = () => (
    <TouchableWithoutFeedback>
      <Icon
        name={"email"}
        type="material-community"
      />
    </TouchableWithoutFeedback>
  );

  const styles = useStyleSheet(LoginScreenStyle);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <View style={styles.headerContainer}>
            <Text category="h1" status="control">
              Bienvenido
            </Text>
            <Text style={styles.signInLabel} category="s1" status="control">
              Inicia sesión para continuar
            </Text>
          </View>
          <Layout style={styles.formContainer} level="1">
            <Input
              placeholder="Email"
              accessoryRight={renderEmailIcon}
              value={email}
              onChangeText={setEmail}
            />
            <Input
              style={styles.passwordInput}
              placeholder="Contraseña"
              accessoryRight={renderPasswordIcon}
              value={password}
              secureTextEntry={!passwordVisible}
              onChangeText={setPassword}
            />
          </Layout>
          <View style={{ flex: 1 }}>
            <Button
              buttonStyle={styles.signInButton}
              title="Iniciar sesión"
            ></Button>
            <KittenButton
              style={styles.signUpButton}
              appearance="ghost"
              status="basic"
              onPress={onSignUpButtonPress}
            >
              ¿No tienes cuenta? Regístrate
            </KittenButton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
