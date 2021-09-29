import React, {useState} from 'react';
import {View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { Text, Modal, Card  } from '@ui-kitten/components';
import { Icon, Header, Button} from 'react-native-elements';
import { getUser } from '../services/user-service';

const HomeScreen = (props) => {
    const { navigation } = props;
    const [user, setUser] = useState("Usuario");
    const [email, setEmail] = useState("user@usermail.com");
    const [visible, setVisible] = React.useState(false);
    
    //const [email, setLastName] = useState("Dolores");
    //const [lastName2, setLastName2] = useState("Delano");

    getUser(1).then(res => setUser(res.data.name));
    getUser(1).then(res => setEmail(res.data.email));

    return (
      <View>
        <View style={{flex:1}}>
          <Header
                    placement="left"
                    backgroundColor="#533D8F"
                    containerStyle={{height:70, marginTop:-30}}
                    leftComponent={{ icon: 'logout', color: '#fff', marginLeft:10 }}
                    rightComponent={{ icon: 'help', color: '#fff', marginRight:10 }}
                  />   
        </View>
        <Button 
            type="clear" 
            buttonStyle={{borderRadius: 5, height:40, width:40, marginLeft:10}} 
            onPress={() => setVisible(true)}/>      
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
            marginBottom: 30,
          }}
        >
          <Text style={styles.title}>¡Hola, {user}!</Text>
          <Modal
            visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setVisible(false)}>
            <Card disabled={true} style={{width:350,height:260, alignItems:'center', alignContent:'center'}}>
              <Text category="h4" style={{textAlign: 'center', marginTop:20, marginBottom:40}}>¿Estás seguro de que deseas cerrar sesión?</Text>
              <Button type="solid" title="Aceptar" buttonStyle={{backgroundColor: '#FF6B6B', width:250, marginLeft:25}} onPress={() => setVisible(false)}/>
              <Button type="clear" title="Cancelar" buttonStyle={{width:250, marginLeft:25}} titleStyle={{color: '#FF6B6B'} } onPress={() => setVisible(false)}/>
            </Card>
          </Modal>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <TouchableOpacity
        style={{width: 110,
                height: 110,
                borderRadius: 55,
                overflow: "hidden",
                borderWidth: 0,
                marginStart: 50
              }}
        onPress={()=>console.log("holi")}>
            <ImageBackground
              resizeMode="cover"
              imageStyle={{
                width: 110,
                height: 110,
                borderRadius: 55,
                overflow: "hidden"
              }}
              style={[]}
              source={require("../../assets/test.png")}>
            </ImageBackground>
          </TouchableOpacity>
          <View style={{ marginLeft: 20, marginTop: 28, width: 130 }}>
            <Text style={styles.user}>
              {user}
            </Text>
            <Text style={styles.mail}>
              {email}
            </Text>
          </View>
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            marginTop: 100,
            marginStart: -300,
            flex: 1,
            flexDirection: 'column'
          }}
        >
          <View style={{ padding: 8 , marginTop: 50}}>
            <Button
              title="Logros"
              type='solid'
              buttonStyle={{ width: 300, backgroundColor: '#533D8F' }}
              icon={{name:'award',
                    type:'feather',
                    color:'#F5FFF5',
                    size:15,}}
              iconRight={true}/>
          </View>
          <View style={{ padding: 8 }}>
            <Button
              title="Editar perfil"
              type='solid'
              buttonStyle={{ width: 300, backgroundColor: '#533D8F' }}
              icon={{name:'edit-2',
                    type:'feather',
                    color:'#F5FFF5',
                    size:15,}}
              iconRight={true}
            />
          </View>
          <View style={{ padding: 8 }}>
            <Button
              title="Login"
              type='solid'
              buttonStyle={{ width: 300, backgroundColor: '#533D8F' }}
              icon={{name:'settings',
                    type:'feather',
                    color:'#F5FFF5',
                    size:15,}}
              iconRight={true}
              onPress={() => navigation.navigate("Auth", {screen: 'Login'})}
            />
          </View>
          <View style={{ padding: 8 }}>
            <Button
              title="Registro"
              type='solid'
              buttonStyle={{ width: 300, backgroundColor: '#533D8F' }}
              icon={{name:'settings',
                    type:'feather',
                    color:'#F5FFF5',
                    size:15,}}
              iconRight={true}
              onPress={() => navigation.navigate("Auth", { screen: "UserType" })}
            />
          </View>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  user: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#533D8F',
  },
  mail: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'gray',
  },
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default HomeScreen;