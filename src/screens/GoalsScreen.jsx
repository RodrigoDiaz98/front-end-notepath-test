import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Divider, List, ListItem, Modal, Card, Select, SelectItem, IndexPath, Autocomplete, AutocompleteItem} from '@ui-kitten/components';
import { Button } from 'react-native-elements';
import {Icon} from 'react-native-elements';
import { getAllUserPath, createPath } from "../services/path-service";

const loadData = (props) => {
  const aux = props.data.paths;
  const aux1 = [];

  for (var i = 0; i < aux.length; i++) {
    let index = aux[i].path_pieces.length - 1;
    aux1[i] = {
      goalPieceId: aux[i].path_pieces[index].piece.id,
      id: aux[i].id,
      title: aux[i].path_pieces[index].piece.name,
      description: aux[i].path_pieces[index].piece.composer,
    };
  }

  return aux1;
};

const GoalsScreen = (props) => {
    const [value, setValue] = React.useState('');
     const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
     const options = [
              'Pieza',
              'Examen',
            ];
    const pieces = [
          { name: 'Star Wars' },
          { name: 'Back to the Future' },
          { name: 'The Matrix' },
          { name: 'Inception' },
          { name: 'Interstellar' },
        ];
    const filter = (item, query) => item.name.toLowerCase().includes(query.toLowerCase());
    const [piece, setPiece] = React.useState(null);
    const [search, setSearch] = React.useState(pieces);

    const onSelect = (index) => {
      setPiece(pieces[index].name);
    };

    const onChangeText = (query) => {
      setPiece(query);
      setSearch(pieces.filter(item => filter(item, query)));
    };

    const renderOption = (item, index) => (
      <AutocompleteItem
        key={index}
        title={item.name}
      />
    );
     const displayValue = options[selectedIndex.row];

    
    const [visible, setVisible] = React.useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [data, setData] = useState([{ data: [] }]);
    const { navigation } = props;

  useEffect(() => {
    getAllUserPath()
      .then((res) => loadData(res))
      .then((res) => setData(res));
  });

  const renderItem = ({ item, index }) => (
    <ListItem
      title={
        <Text style={styles.name}>
          {item.title} {index + 1}
        </Text>
      }
      description={
        <Text style={styles.composer}>
          {item.description} {index + 1}
        </Text>
      }
      onPress={() =>
        navigation.navigate("Path", {
          goalPieceId: item.goalPieceId,
          id: item.id,
          name: item.title,
          composer: item.description,
        })
      }
    />
  );

  return (
    <View>
      {isEmpty ? (
        <View>
          <View style={{alignItems:'center', marginTop: 140, marginBottom: 20, margin: 60, }}>
                    <Text category="h2" style={{marginBottom: 40, color: "gray", fontWeight: 'bold', textAlign: 'center',}}> No tienes caminos en progreso.</Text>
                    <Text category= "h2" style={{marginBottom: 40, color: "gray", fontWeight: 'bold', textAlign: 'center',}}> ¡Agrega un nuevo objetivo! </Text>
                </View>
                <View style={{flex: 1, marginLeft: 140}}>
                  <Icon
                  reverse
                  name='plus'
                  type='material-community'
                  color='#533D8F'
                  size={45}
                  onPress={() => {setVisible(true)}}
                />
                </View>
                <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                  <Text style={{color:"#533D8F", fontSize:30, margin:20, textAlign: 'center'}}>
                    ¡Crea un nuevo objetivo!
                  </Text>
                  <Text style={{ fontSize: 15, color:'gray', margin: 10}}>Seleccione su objetivo</Text>
                  <Select
                    style={{margin: 10}}
                    placeholder='Default'
                    value={displayValue}
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}>
                    <SelectItem title='Pieza'/>
                    <SelectItem title='Examen' disabled={true}/>
                  </Select>
                  <Text style={{ fontSize: 15, color:'gray', margin:10 }}>Seleccione el nombre de la pieza</Text>
                   <Autocomplete
                      placeholder='Selecciona una pieza'
                      value={piece}
                      onSelect={onSelect}
                      onChangeText={onChangeText}
                      style={{margin: 10}}>
                      {search.map(renderOption)}
                    </Autocomplete>
                  <Button title='Aceptar' buttonStyle={{backgroundColor: '#533D8F', marginTop:20,marginLeft:10, width:322}} 
                  onPress={() => {
                    setVisible(false);
                    /* AQUI ENTREGAR EL ID PUESTO (variable 'value') */
                  }}/>
                  <Button 
                    title= 'Cancelar'
                    type='clear' 
                    titleStyle={{color: '#927EC8', fontSize: 14}}
                    buttonStyle={{marginLeft:10, width:322}}
                    onPress={() => {
                      setValue('')
                      setVisible(false)
                    }}/>
                </Card>
              </Modal>
                
            </View>) : 
            (<View>
                <View style={{justifyContent: 'center', marginTop: 60, marginBottom: 20, margin: 20, borderWidth: 3,
                                  borderColor: "#533D8F",
                                  borderRadius: 6,}}>
                    <List
                        data={data}
                        ItemSeparatorComponent={Divider}
                        renderItem={renderItem}
                        style= {{maxHeight: 380, backgroundColor: '#DAD4EC'}}
                        />
                </View>
                <View style={{flex: 1, marginLeft: 250}}>
                  <Icon
                  reverse
                  name='plus'
                  type='material-community'
                  color='#533D8F'
                  size={35}
                  onPress={() => setVisible(true)}
                />
                </View>
              <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                  <Text style={{color:"#533D8F", fontSize:30, margin:20, textAlign: 'center'}}>
                    ¡Crea un nuevo objetivo!
                  </Text>
                  <Text style={{ fontSize: 15, color:'gray', margin: 10}}>Seleccione su objetivo</Text>
                  <Select
                    style={{margin: 10}}
                    placeholder='Default'
                    value={displayValue}
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}>
                    <SelectItem title='Pieza'/>
                    <SelectItem title='Examen' disabled={true}/>
                  </Select>
                  <Text style={{ fontSize: 15, color:'gray', margin:10 }}>Seleccione el nombre de la pieza</Text>
                   <Autocomplete
                      placeholder='Selecciona una pieza'
                      value={piece}
                      onSelect={onSelect}
                      onChangeText={onChangeText}
                      style={{margin: 10}}>
                      {search.map(renderOption)}
                    </Autocomplete>
                  <Button title='Aceptar' buttonStyle={{backgroundColor: '#533D8F', marginTop:20,marginLeft:10, width:322}} 
                  onPress={() => {
                    setVisible(false);
                    /* AQUI ENTREGAR EL ID PUESTO (variable 'value') */
                  }}/>
                  <Button 
                    title= 'Cancelar'
                    type='clear' 
                    titleStyle={{color: '#927EC8', fontSize: 14}}
                    buttonStyle={{marginLeft:10, width:322}}
                    onPress={() => {
                      setValue('')
                      setVisible(false)
                    }}/>
                </Card>
              </Modal>
            </View>)} 
          </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#533D8F",
  },
  composer: {
    fontSize: 14,
    fontStyle: "italic",
    color: "gray",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default GoalsScreen;
