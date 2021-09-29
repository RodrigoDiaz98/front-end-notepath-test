import React from "react";
import { View } from "react-native";
import {
  StyleService,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import {Button as KittenButton} from '@ui-kitten/components';
import { Icon, Button } from "react-native-elements";

const UserReadyScreenStyle = StyleService.create({
  container: {
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
    paddingTop: 62,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  startButton: {
    marginHorizontal: 16,
    backgroundColor: '#533d8f',
    height: 60,
  },
  laterButton: {
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
  buttonNavContainer:{
    flex: 0, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 32,
  },
});

const UserReadyScreen = (props) => {
  const { navigation } = props;

  const onStartButtonPress = () => {
    navigation.navigate('Goals');
  }; 

  const onLaterButtonPress = () => {
    navigation.navigate('Home');
  };

  const onButtonBackPress = () => {
    navigation.goBack();
  };

  const styles = useStyleSheet(UserReadyScreenStyle);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
          Todo listo
        </Text>
      </View>

      <View style={styles.formContainer}>
        <Button
          buttonStyle={styles.startButton}
          onPress={onStartButtonPress}
          title="Empezar"
        >
        </Button>
        <KittenButton
          style={styles.laterButton}
          appearance="ghost"
          status="basic"
          onPress={onLaterButtonPress}
        > Más tarde
        </KittenButton>
      </View>
      <View style={styles.buttonNavContainer}>
        <Icon
          name="chevron-left"
          type="material-community"
          size={32}
          color="#533d8f"
          onPress={onButtonBackPress}
          iconStyle={{ fontSize: 50 }}
        ></Icon>
      </View>
    </View>
  );
};

export default UserReadyScreen;
