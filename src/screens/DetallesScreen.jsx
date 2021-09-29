import React, { useEffect } from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { Button, Card, Modal, Icon } from "@ui-kitten/components";
import { AirbnbRating } from "react-native-ratings";
import {
  completePiece,
  newReviewPathPiece,
  reviewPath,
} from "../services/path-service";

const CheckIcon = (props) => (
  <Icon {...props} width="70" height="70" name="checkmark-circle-2" />
);

const StarIcon = (props) => (
  <Icon {...props} width="60" height="60" name="star" />
);

const DetallesScreen = ({ route, navigation }) => {
  const { level, style, pathId, id, name, composer, type, isComplete, isGoal } =
    route.params;
  const [visible, setVisible] = React.useState(false);
  const [vis, setVis] = React.useState(false);
  const [vis2, setVis2] = React.useState(false);
  const [goalVis, setGoalVis] = React.useState(false);
  const [dis, setDisabled] = React.useState(isComplete);
  console.log(route.params);
  return (
    <View style={styles.mainConatinerStyle}>
      <Image source={type} style={{ width: 300, height: 300 }} />

      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Autor: {composer} {"\n"}
        Cancion: {name} {"\n"}
        Genero: {style} {"\n"}
        nivel: {level}
      </Text>

      <Button
        style={styles.positionInBottomRight}
        appearance="ghost"
        status="success"
        disabled={dis}
        accessoryLeft={CheckIcon}
        onPress={() => {
          setVisible(true);
        }}
      ></Button>

      <Button
        style={styles.positionInBottomLeft}
        appearance="ghost"
        status="warning"
        accessoryLeft={StarIcon}
        onPress={() => 
          navigation.navigate("Rating", {
            name: name,
            isPath: false,
          })
        }
      ></Button>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true}>
          <Text style={{ fontSize: 30 }}>Marcar como completo</Text>
          <Button
            size="medium"
            onPress={() => {
              setVisible(false);
              setDisabled(true);
              completePiece(pathId, id);

              if (isGoal) {
                setGoalVis(true);
              }
            }}
          >
            Completar
          </Button>
          <Button
            size="small"
            appearance="ghost"
            onPress={() => setVisible(false)}
          >
            Cancelar
          </Button>
        </Card>
      </Modal>

      <Modal
        visible={vis}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVis(false)}
      >
        <Card disabled={true}>
          <Text style={{ fontSize: 30 }}>Califica esta sugerencia</Text>
          <AirbnbRating
            defaultRating={1}
            showRating={false}
            onFinishRating={(rate) => {
              newReviewPathPiece(id, rate);
              setVis2(true);
            }}
          />
          <Button size="small" appearance="ghost" onPress={() => setVis(false)}>
            Cancelar
          </Button>
        </Card>
      </Modal>

      <Modal
        visible={vis2}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVis2(false)}
      >
        <Card disabled={true}>
          <Text style={{ fontSize: 30 }}>¡Gracias por tu opinión!</Text>
        </Card>
      </Modal>

      <Modal
        visible={goalVis}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => {
          setGoalVis(false);
        }}
      >
        <Card disabled={true}>
          <Text style={{ fontSize: 30, textAlign: "center" }}>
            ¡Felicitaciones!
          </Text>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Haz completado tu camino, cuéntanos que te pareció
          </Text>
          <AirbnbRating
            defaultRating={1}
            showRating={false}
            onFinishRating={(rate) => {
              setVis2(true);
            }}
          />
          <Button
            size="small"
            appearance="ghost"
            onPress={() => setGoalVis(false)}
          >
            Cancelar
          </Button>
        </Card>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  mainConatinerStyle: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  floatingMenuButtonStyle: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 35,
  },
  positionInBottomRight: {
    position: "absolute",
    width: 80,
    height: 80,
    bottom: 40,
    left: Dimensions.get("window").width - 120,
    zIndex: 100,
  },
  positionInBottomLeft: {
    position: "absolute",
    width: 80,
    height: 80,
    bottom: 40,
    left: 40,
    zIndex: 100,
  },
});

export default DetallesScreen;
