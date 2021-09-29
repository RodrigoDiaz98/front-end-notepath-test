import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  Input,
  StyleService,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import {Button as KittenButton} from '@ui-kitten/components';
import { Icon, Button } from "react-native-elements";

const SignUpScreenStyle = StyleService.create({
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
  profileAvatar: {
    width: 116,
    height: 116,
    borderRadius: 58,
    alignSelf: "center",
    backgroundColor: "background-basic-color-1",
    tintColor: "color-primary-default",
  },
  editAvatarButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  userNameInput: {
    marginTop: 16,
  },
  emailInput: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  termsCheckBox: {
    marginTop: 24,
  },
  termsCheckBoxText: {
    color: "text-hint-color",
    marginLeft: 10,
  },
  signUpButton: {
    marginTop: 12,
    marginHorizontal: 16,
  },
  signInButton: {
    marginTop: 32,
    marginHorizontal: 16,
    backgroundColor: '#533d8f',
    height: 60,
  },
  signInLabel: {
    marginTop: 16,
  },
});

const SignUpScreen = (props) => {
  const { navigation } = props;

  const [userName, setUserName] = React.useState("");
  const [userFullName, setUserFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const onSignUpButtonPress = () => {
    navigation.navigate('UserType');
  };

  const onSignInButtonPress = () => {
    navigation.navigate('Login');
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

  const renderPersonIcon = () => (
    <TouchableWithoutFeedback>
      <Icon
        name={"person"}
        type="material"
      />
    </TouchableWithoutFeedback>
  );

  const styles = useStyleSheet(SignUpScreenStyle);

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
            Regístrate para continuar
          </Text>
        </View>

        <ScrollView style={{ flex: 1 }}>
          <View style={styles.formContainer}>
            <Input
              autoCapitalize="none"
              placeholder="Nombre completo"
              accessoryRight={renderPersonIcon}
              value={userFullName}
              onChangeText={setUserFullName}
            />
            <Input
              style={styles.userNameInput}
              autoCapitalize="none"
              placeholder="Nombre de usuario"
              accessoryRight={renderPersonIcon}
              value={userName}
              onChangeText={setUserName}
            />
            <Input
              style={styles.emailInput}
              autoCapitalize="none"
              placeholder="Email"
              accessoryRight={renderEmailIcon}
              value={email}
              onChangeText={setEmail}
            />
            <Input
              style={styles.passwordInput}
              autoCapitalize="none"
              secureTextEntry={!passwordVisible}
              placeholder="Contraseña"
              accessoryRight={renderPasswordIcon}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              buttonStyle={styles.signInButton}
              title="Registrarse"
              onPress={onSignUpButtonPress}
            ></Button>
            <KittenButton
              style={styles.signUpButton}
              appearance="ghost"
              status="basic"
              onPress={onSignInButtonPress}
            >
              ¿Ya tienes cuenta? Inicia sesión aquí
            </KittenButton>
          </View>
        </ScrollView>
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;