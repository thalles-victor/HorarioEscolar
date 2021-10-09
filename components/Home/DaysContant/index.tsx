import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface Props {
    DayWeek: string,
    ListSubjects: String[],
}

const DaysContant: React.FC<Props> = ({
    DayWeek,
    ListSubjects,

}) => {
    if  (DayWeek !== "Sábado" ||  "Domingo"){
        return(
            <View style={styles.container}>
                    <Text style={styles.titleWeek}
                    > {DayWeek} </Text>              
                        <View style={styles.containerSubjects}>
                            
                            {
                            
                                ListSubjects.map((item, index)=>{
                                    
                                    return(
                                        <View style={styles.containerSubject}>
                                            
                                            <Text style={styles.subjects}> {'    ' + item}</Text>
                                        </View>
                                    )
                                })
                            }
                    
                    
                        
                        </View>
                </View>
            );
    }
    else {
        return <Text>Final de semana, vá descançar e se preparar oara senaba que vem</Text>
    }
}

const styles = StyleSheet.create({
    container : {
        display: 'flex',
        
        flexDirection: 'column',
        alignItems: 'flex-start',
        
        margin: 20,
        
        width: 350,
        
        borderRadius: 18,
        
    },
    titleWeek : {
        padding: 10,
        fontSize: 23,
        color: 'blue'
    },
    containerSubjects : {
        
        
        
    },
    containerSubject : {
        display: 'flex',
        flexDirection: 'row',
        
    },
    subjects : {
        fontSize: 23,
        padding: 20,
    }
});

export default DaysContant;