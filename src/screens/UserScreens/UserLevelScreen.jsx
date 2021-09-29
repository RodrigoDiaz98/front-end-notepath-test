import React from "react";
import { View } from "react-native";
import { StyleService, Text, useStyleSheet } from "@ui-kitten/components";
import { Button, Icon, Slider } from "react-native-elements";
import { updateUser } from "../../services/user-service";

const UserLevelScreenStyle = StyleService.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonGrid: {
    flex: 1,
    flexDirection: "row",
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

const UserLevelScreen = (props) => {
  const { navigation } = props;

  const [value, setValue] = React.useState(1);

  const onButtonNextPress = () => {
    updateUser(1, { level: value }).then(navigation.navigate("UserReady"));
  };

  const onButtonBackPress = () => {
    navigation.goBack();
  };

  const styles = useStyleSheet(UserLevelScreenStyle);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
          Editar preferencias
        </Text>
        <Text style={styles.signInLabel} category="h4" status="control">
          ¿Cuánto sabes tocar?
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "stretch",
          justifyContent: "center",
          marginHorizontal: 32,
        }}
      >
        <Slider
          value={value}
          onValueChange={(value) => setValue(value)}
          maximumValue={10}
          minimumValue={1}
          step={1}
          thumbStyle={{ backgroundColor: "#533d8f" }}
        />
        <View style={{ marginVertical: 16, alignItems: "center" }}>
          <Text category="p1">Nivel: {value}</Text>
          <Text category="p1"></Text>
        </View>
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

export default UserLevelScreen;
