import React, { useState } from "react";
import { View } from "react-native";
import { StyleService, Text, useStyleSheet } from "@ui-kitten/components";
import { Icon, CheckBox } from "react-native-elements";

const UserGenreScreenStyle = StyleService.create({
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

const genreCheckboxes = [
  [
    { id: 1, title: "Baroque" },
    { id: 2, title: "Classical" },
    { id: 3, title: "Romantic" },
  ],
  [
    { id: 4, title: "Contemporary" },
    { id: 5, title: "Traditional" },
    { id: 6, title: "20th Century" },
  ],
];

const UserGenreScreen = (props) => {
  const { navigation } = props;

  const [checked, setChecked] = React.useState(0);

  const onButtonNextPress = () => {
    checked
      ? navigation.navigate("UserLevel")
      : navigation.navigate("UserGenre");
  };

  const onButtonBackPress = () => {
    navigation.goBack();
  };

  const styles = useStyleSheet(UserGenreScreenStyle);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
          Editar preferencias
        </Text>
        <Text style={styles.signInLabel} category="h4" status="control">
          Mis géneros favoritos
        </Text>
        <Text style={styles.signInLabel} category="s1" status="control">
          Selecciona al menos un género
        </Text>
      </View>

      {
        //Se puede hacer un componente aparte para esto (genera un grid de checkbox con iconos)
        genreCheckboxes.map((checkboxRow) => (
          <View style={styles.buttonGrid}>
            {checkboxRow.map((checkbox) => (
              <View style={styles.buttonContainer}>
                <CheckBox
                  center
                  iconRight
                  iconType="material-community"
                  checkedIcon="check"
                  uncheckedIcon="music"
                  checkedColor="green"
                  size={50}
                  checked={checked[checkbox.id] === true}
                  onPress={() =>
                    setChecked({
                      ...checked,
                      [checkbox.id]: !checked[checkbox.id],
                    })
                  }
                />
                <Text>{checkbox.title}</Text>
              </View>
            ))}
          </View>
        ))
      }

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

export default UserGenreScreen;
