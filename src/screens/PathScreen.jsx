import * as React from "react";
import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Text, Button, Avatar, Icon, Divider } from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";
import { getUserPath, createPath } from "../services/path-service";

const MapProgress = (props) => {
  if (!props.data || props.data.length === 0) return null;
  const { navigation } = props;
  const firstItem = props.data.shift();
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ width: "100%" }}
      showsVerticalScrollIndicator={true}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.verticalLine}></View>
        <View style={styles.verticalWrap}>
          <View style={styles.itemWrap}>
            <ImageBackground
              resizeMode="cover"
              imageStyle={{
                width: 80,
                height: 80,
                borderRadius: 30,
                overflow: "hidden",
                borderWidth: 3,
              }}
              style={[
                {
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
              source={
                firstItem.isComplete
                  ? require("../../assets/complete.png")
                  : firstItem.type
              }
            >
              <Button
                size="giant"
                appearance="ghost"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 30,
                  borderWidth: 3,
                }}
                onPress={() => {
                  navigation.navigate("Detalles", {
                    level: firstItem.level,
                    style: firstItem.style,
                    id: firstItem.id,
                    name: firstItem.name,
                    composer: firstItem.composer,
                    type: firstItem.type,
                    isComplete: firstItem.isComplete,
                    isGoal: firstItem.isGoal,
                  });
                }}
              />
            </ImageBackground>
            <View style={{ marginLeft: 20, flex: 1 }}>
              <Text style={styles.name}>{firstItem.name}</Text>
              <Text style={styles.composer}>{firstItem.composer}</Text>
            </View>
          </View>

          {props.data.map((item, index) => (
            <View style={styles.itemWrap} key={item.id}>
              <ImageBackground
                resizeMode="cover"
                imageStyle={{
                  width: 80,
                  height: 80,
                  borderRadius: 30,
                  overflow: "hidden",
                  borderWidth: 3,
                }}
                style={[
                  {
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
                source={
                  item.isComplete
                    ? require("../../assets/complete.png")
                    : item.type
                }
              >
                <Button
                  size="giant"
                  appearance="ghost"
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 30,
                    borderWidth: 3,
                  }}
                  onPress={() =>
                    navigation.navigate("Detalles", {
                      level: item.level,
                      style: item.style,
                      pathId: item.pathId,
                      id: item.id,
                      name: item.name,
                      composer: item.composer,
                      type: item.type,
                      isComplete: item.isComplete,
                      isGoal: item.isGoal,
                    })
                  }
                />
              </ImageBackground>
              <View style={{ marginLeft: 20, flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.composer}>{item.composer}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const loadData = (props) => {
  const aux = props.data.path_pieces;
  const aux1 = [];

  for (var i = 0; i < aux.length; i++) {
    if (aux[i].piece.piece_type === "Repertoire") {
      aux[i].piece.type = require("../../assets/repertorio.png");
    }
    if (aux[i].piece.piece_type === "Technical Study") {
      aux[i].piece.type = require("../../assets/tecnica.png");
    }
    if (aux[i].piece.piece_type === "Melodic Study") {
      aux[i].piece.type = require("../../assets/melodico.png");
    }
    if (aux[i].piece.piece_type === "Scale") {
      aux[i].piece.type = require("../../assets/escalas.png");
    }
    aux1[i] = {
      level: aux[i].piece.level,
      style: aux[i].piece.style,
      pathId: props.data.i,
      id: aux[i].id,
      name: aux[i].piece.name,
      composer: aux[i].piece.composer,
      type: aux[i].piece.type,
      isComplete: aux[i].is_completed,
      isGoal: aux[i].is_goal,
    };
  }
  data = aux1;
  return aux1;
};
/*
let data = [
  {
    id: 0,
    name: "Pieza 1",
    composer: "Compositor",
    type: require("../../assets/repertorio.png"),
    isComplete: true,
    isGoal: false,
  }, //Debe estar en el formato require("")
  {
    id: 1,
    name: "Pieza 2",
    composer: "Compositor",
    type: require("../../assets/melodico.png"),
    isComplete: true,
    isGoal: false,
  },
  {
    id: 2,
    name: "Pieza 3",
    composer: "Compositor",
    type: require("../../assets/tecnica.png"),
    isComplete: false,
    isGoal: false,
  },
  {
    id: 3,
    name: "Pieza 4",
    composer: "Compositor",
    type: require("../../assets/escalas.png"),
    isComplete: false,
    isGoal: false,
  },
  {
    id: 4,
    name: "Pieza 5",
    composer: "Compositor",
    type: require("../../assets/melodico.png"),
    isComplete: false,
    isGoal: false,
  },
  {
    id: 5,
    name: "Pieza 6",
    composer: "Compositor",
    type: require("../../assets/tecnica.png"),
    isComplete: false,
    isGoal: false,
  },
  {
    id: 6,
    name: "Pieza 7",
    composer: "Compositor",
    type: require("../../assets/escalas.png"),
    isComplete: false,
    isGoal: false,
  },
  {
    id: 7,
    name: "Pieza 8",
    composer: "Compositor",
    type: require("../../assets/repertorio.png"),
    isComplete: false,
    isGoal: false,
  },
  {
    id: 8,
    name: "Pieza 9",
    composer: "Compositor",
    type: require("../../assets/melodico.png"),
    isComplete: false,
    isGoal: true,
  },
];
*/

const PathScreen = (props) => {
  const { navigation } = props;
  const [data, setData] = useState([{ data: [] }]);
  //const { id } = props.params;
  useEffect(() => {
    getUserPath(props.route.params.id)
      .then((res) => loadData(res))
      .then((res) => setData(res));
  });
  return (
    <View style={{ flex: 1, marginTop: 15, marginBottom: 20 }}>
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          flexGrow: 1,
          padding: 1,
          margin: 5,
        }}
      >
        <MapProgress data={[...data]} navigation={navigation} />
      </ScrollView>
      <View
        style={{ marginTop: 15, alignItems: "center", alignContent: "center" }}
      >
        <Text category="h6">¿No estás satisfecho?</Text>
        <Button
          appearance="ghost"
          onPress={() =>
            createPath(props.route.params.goalPieceId).then(() =>
              navigation.navigate("Goals")
            )
          }
        >
          <Text style={{ textDecorationLine: "underline", color: "blue" }}>
            Generar otro camino
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  verticalLine: {
    backgroundColor: "#A8BAB5",
    width: 7,
    height: "95%",
    position: "absolute",
    marginLeft: 60,
    marginTop: 20,
  },
  verticalWrap: {
    justifyContent: "space-between",
    height: "100%",
  },
  itemWrap: {
    width: 350,
    height: 130,
    marginLeft: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  pointWrap: {
    backgroundColor: "black",
    height: 30,
    width: 30,
    marginLeft: 5,
    alignItems: "center",
  },
  firstPoint: {
    backgroundColor: "black",
    borderRadius: 20,
    height: 10,
    width: 10,
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  composer: {
    fontStyle: "italic",
    fontSize: 14,
  },
});

export default PathScreen;
