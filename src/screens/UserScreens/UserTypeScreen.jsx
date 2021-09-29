import React from 'react';
import {View} from 'react-native';
import {
  StyleService,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import {Button} from "react-native-elements";

const UserTypeScreenStyle = StyleService.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 300,
  },
  button: {
    marginVertical: 32,
    marginHorizontal: 16,
    width: 220,
    height: 60,
    backgroundColor: '#533d8f',
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 216,
    backgroundColor: "#533d8f",
  },
  signInLabel: {
    marginTop: 16,
  },
  buttonNavContainer: {
    flex: 0,
    alignItems: "flex-end",
    margin: 32,
  },
});

const UserTypeScreen = (props) => {
  const { navigation } = props;
  
  const onButtonPress = () => {
    navigation.navigate("UserInstrument");
  };

  const styles = useStyleSheet(UserTypeScreenStyle);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
          Editar preferencias
        </Text>
        <Text style={styles.signInLabel} category="h4" status="control">
          Soy...
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.button}
          value="musico"
          onPress={onButtonPress}
          title="Músico"
        ></Button>
        <Button
          buttonStyle={styles.button}
          value="estudiante"
          onPress={onButtonPress}
          title="Estudiante"
        ></Button>
      </View>
    </View>
  );
}

export default UserTypeScreen;