
import React, {
  useState,
  
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

//Components
import DaysContant from './DaysContant';


export default function App() {
  var date = new Date();
  const  [currentWeek, setCurrentWeek] = useState(date.getDay());
  const  [indexWeek, setIndexWeek] = useState(currentWeek);
  

  const listWeek = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ]
  

  const schoolYear = 3;

  const Table = {
    ano: {
      3 : {
        semana : {
          "Domingo" : ['Domingo, Se organize.'],
          "Segunda" : ["Geografia", "História", "Biologia", "Inglês", "Português"],
          "Terça" : ["Geografia", "História", "Matemática", "Quimica", "Sociologia"],
          "Quarta" : ["Matemática", "Filosofia", "Proj. de Vida", "Matemática", "Física"],
          "Quinta" : ["Português", "Português", "Empreendedorismo", "Matemática", "Biologia"],
          "Sexta" : ["Português", "Espanhol", "Química", "Matemática", "Física"],
          "Sábado" : ['Sábado, vá descançar']
        }
      }
    } 
      
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
          <Text>{schoolYear}° Ano</Text>
            <View
              style={styles.choiceWeekDay}
              >
              
              <TouchableOpacity
                style={styles.buttonChoice}
                onPress={() => {setIndexWeek(1)}}
              >
                <Text style={styles.textChoice}>Segunda</Text>
                
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.buttonChoice}
                onPress={() => {setIndexWeek(2)}}
                >
                <Text style={styles.textChoice}>Terça</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.buttonChoice}
                onPress={() => {setIndexWeek(3)}}
                >
                <Text style={styles.textChoice}>Quarta</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.buttonChoice}
                onPress={() => {setIndexWeek(4)}}
              >
                <Text style={styles.textChoice}>Quinta</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.buttonChoice}
                onPress={() => {setIndexWeek(5)}}
                >
                <Text style={styles.textChoice}>Sexta</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.main}>
              
            <DaysContant DayWeek={listWeek[indexWeek]} ListSubjects={Table.ano[schoolYear].semana[listWeek[indexWeek]]}/>
            
                  <View style={styles.containerSwitch}>
                    <TouchableOpacity
                      onPress={
                        () => {
                          if (indexWeek >1){
                            setIndexWeek(indexWeek - 1)
                          }
                        }
                      }
                      >
                      <Text style={styles.switch}> 
                      {                    
                        indexWeek ==0 && ' ' || '<'
                      } </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.buttonChoice}
                      onPress={() => {
                        setIndexWeek(currentWeek)
                      }}
                    >
                      <Text style={styles.textChoice}>Hoje</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={
                        () => {
                          if (indexWeek <5){ //o limite da soma é 4 por iniciar com 0; 0 -> 4= 5. Por isso a última soma é quando ele é igual a 3
                            setIndexWeek(indexWeek + 1)
                          }
                        }
                      }
                      
                    >
                      <Text style={styles.switch}> 
                      {
                        indexWeek >=6 && ' ' || '>'
                      } </Text>
                    </TouchableOpacity>
                  </View>
          
            </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    marginTop: 10,
  },


  choiceWeekDay : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
  
    
  },

  buttonChoice : {
    
    justifyContent: 'space-between',
    backgroundColor: '#3363ffDF',
    
    borderRadius: 3,
    margin: 3,
    height: 35,
  },
  textChoice : {
    
    fontSize: 20,
    padding: 2,
    color: 'white',
    
    
  },

  containerSwitch : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  switch : {
    fontSize: 50, 
  }
});
