import React, { useState } from "react";
import { View } from "react-native";
import { StyleService, Text, useStyleSheet } from "@ui-kitten/components";
import { Icon, CheckBox } from "react-native-elements";
import { updateUser } from "../../services/user-service";

const UserInstrumentScreenStyle = StyleService.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    marginVertical: 16,
    marginHorizontal: 16,
    width: 220,
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
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 32,
  },
});

const UserInstrumentScreen = (props) => {
  const { navigation } = props;

  const [checked, setChecked] = React.useState(0);

  const onButtonNextPress = () => {
    //deberia tirar un error si no hay ninguno seleccionado
    checked
      ? updateUser(1, { instrument: "Violin" }).then(
          navigation.navigate("UserGenre")
        )
      : navigation.navigate("UserInstrument");
  };

  const onButtonBackPress = () => {
    navigation.goBack();
  };

  const styles = useStyleSheet(UserInstrumentScreenStyle);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
          Editar preferencias
        </Text>
        <Text style={styles.signInLabel} category="h4" status="control">
          Mis instrumentos
        </Text>
        <Text style={styles.signInLabel} category="s1" status="control">
          Selecciona al menos un instrumento
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CheckBox
          center
          iconRight
          iconType="material-community"
          checkedIcon="check"
          uncheckedIcon="violin"
          checkedColor="green"
          size={50}
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
        <Text>Violín</Text>
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

        <Icon
          name="chevron-right"
          type="material-community"
          size={32}
          color="#533d8f"
          onPress={onButtonNextPress}
          iconStyle={{ fontSize: 50 }}
        ></Icon>
      </View>
    </View>
  );
};

export default UserInstrumentScreen;
