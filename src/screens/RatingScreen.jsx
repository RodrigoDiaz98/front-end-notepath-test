import React, { useEffect } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Button, Modal, Card } from "@ui-kitten/components";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  completePiece,
  newReviewPathPiece,
  reviewPath,
} from "../services/path-service";

/*const PositiveIcon = (props) => (
  <Icon {...props} width="70" height="70" name="checkmark" />
);

const NegativeIcon = (props) => (
  <Icon {...props} width="70" height="70" name="close" />
);*/

const w = Dimensions.get("window").width;

const MusicIcon = (props) => (
  <Icon {...props} width="60" height="60" name="music" />
);

const RatingScreen = ({ route, navigation }) => {
  const { name, isPath } = route.params;
  const [thumbs, setThumbs] = React.useState(0);
  const [dis, setdis] = React.useState(false);
  const [dis2, setdis2] = React.useState(false);
  const [vis, setVis] = React.useState(false);
  const [like, setLike] = React.useState(false);
  const [dislike, setDislike] = React.useState(false);
  const [rate, setRate] = React.useState(0);

  return (
    <View style={styles.mainConatinerStyle}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          Califica "{name}"
        </Text>
      </View>

      <View style={styles.ratesContainer}>
        <Button
          style={{
            width: w/11 * 3,
            height: w/11 * 3,}
          }
          status="success"
          disabled={dis}
          onPress={() => {
            setLike(true);
            setDislike(false);
            setdis(true);
            setdis2(false);
            setThumbs(1);
            setRate(0);
          }}
        >
          <Icon name="thumbs-up" size={60} color="#C0FF8F" />
        </Button>

        <Button
          style={{
            width: w/11 * 3,
            height: w/11 * 3,
            }
          }
          status='danger'
          /*accessoryLeft={NegativeIcon}*/
          disabled={dis2}
          onPress={() => {
            setLike(false);
            setDislike(true);
            setdis(false);
            setdis2(true);
            setThumbs(-1);
            setRate(0);
          }}
        >
          <Icon name="thumbs-down" size={60} color="#FF888A" />
        </Button>
      </View>

      {(like || dislike) && <View style={styles.tagsContainer}>
        <View style={{ justifyContent: "space-around", alignItems: "center", flex: 1 }}>
          <Button
            appearance="ghost"
            status={(rate == 1 || rate == 6) ? 'warning' : 'basic'}
            onPress={() => {
              if (like) {
                setRate(1);
              } else {
                setRate(6)
              }
            }}
          ><Icon name="music" size={60} color={(rate == 1 || rate == 6) ? "#FFCF2E" : "#000000"} /></Button>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>{isPath ? 
            (like ? 'Extensión apropiada' : 'Tuvo muy pocas piezas') : 
            (like ? 'Dificultad apropiada' : 'Demasiado difícil')}
          </Text>
        </View>
        <View style={{ justifyContent: "space-around", alignItems: "center", flex: 1 }}>
          <Button
            appearance="ghost"
            status={(rate == 2 || rate == 7) ? 'warning' : 'basic'}
            onPress={() => {
              if (like) {
                setRate(2);
              } else {
                setRate(7)
              }
            }}
          ><Icon name="music" size={60} color={(rate == 2 || rate == 7) ? "#FFCF2E" : "#000000"} /></Button>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>{isPath ? 
            (like ? 'La dificultad incrementó de manera pareja' : 'Tuvo demasiadas piezas') : 
            (like ? 'Buen estilo' : 'Demasiado fácil')}
          </Text>
        </View>
        <View style={{ justifyContent: "space-around", alignItems: "center", flex: 1 }}>
          <Button
            appearance="ghost"
            status={(rate == 3 || rate == 8) ? 'warning' : 'basic'}
            onPress={() => {
              if (like) {
                setRate(3);
              } else {
                setRate(8)
              }
            }}
          ><Icon name="music" size={60} color={(rate == 3 || rate == 8) ? "#FFCF2E" : "#000000"} /></Button>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>{isPath ? 
            (like ? 'Me gustaron las piezas' : 'Había saltos de dificultad demasiado grandes') : 
            (like ? 'Me gustó la melodía' : 'Mal estilo')}
          </Text>
        </View>
      </View>}
      
      {(like || dislike) && <View style={styles.tagsContainer}>
      <View style={{ justifyContent: "space-around", alignItems: "center", flex: 1 }}>
          <Button
            appearance="ghost"
            status={(rate == 4 || rate == 9) ? 'warning' : 'basic'}
            onPress={() => {
              if (like) {
                setRate(4);
              } else {
                setRate(9)
              }
            }}
          ><Icon name="music" size={60} color={(rate == 4 || rate == 9) ? "#FFCF2E" : "#000000"} /></Button>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>{isPath ? 
            (like ? 'Me ayudó con la técnica' : 'Me aburrió') : 
            (like ? 'Intelectual' : 'No me gustó la melodía')}
          </Text>
        </View>
        {(!isPath || !like) && <View style={{ justifyContent: "space-around", alignItems: "center", flex: 1 }}>
          <Button
            appearance="ghost"
            status={(rate == 5 || rate == 10) ? 'warning' : 'basic'}
            onPress={() => {
              if (like) {
                setRate(5);
              } else {
                setRate(10)
              }
            }}
          ><Icon name="music" size={60} color={(rate == 5 || rate == 10) ? "#FFCF2E" : "#000000"} /></Button>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>{isPath ? 
            'No me ayudó con la técnica' : 
            (like ? 'Me ayudó con la técnica' : 'Muy simple')}
          </Text>
        </View>}
        {dislike && !isPath && <View style={{ justifyContent: "space-around", alignItems: "center", flex: 1 }}>
          <Button
            appearance="ghost"
            status={(rate == 11) ? 'warning' : 'basic'}
            onPress={() => {
                setRate(11);
            }}
          ><Icon name="music" size={60} color={(rate == 11) ? "#FFCF2E" : "#000000"} /></Button>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>
            Técnica inapropiada
          </Text>
        </View>}
      </View>}

      <View style={{ flex: 1, flexDirection:"row", alignItems: 'center',}}>
        <Button
          style={styles.bottom}
          disabled={!dis && !dis2}
          status="warning"
          onPress={() => {
            setVis(true);
          }}
        >
          <Text style={{fontSize: 20, color: 'white'}}>Hecho</Text>
        </Button>
      </View>
        
      <Modal
        visible={vis}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => {
          setVis(false)
          navigation.goBack()
        }}
      >
        <Card disabled={true}>
          <Text style={{ fontSize: 30 }}>¡Gracias por tu opinión!</Text>
          <Button
            size="medium"
            onPress={() => {
              setVis(false);
              navigation.goBack();
            }}
          >
            Aceptar
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
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  ratesContainer: {
    flex: 1,
    flexDirection:"row",
    justifyContent: 'space-around',
    width: w,
    alignItems: 'center',
  },
  tagsContainer: {
    flex: 1,
    flexDirection:"row",
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottom: {
    width: 280,
    height: 60,
    zIndex: 100,
  },
});

export default RatingScreen;