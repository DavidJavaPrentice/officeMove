import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';

export class Menu extends React.Component {

    onPress = ()=> {
        Alert.alert('You tapped the button!');
    }

    render(){

        return(
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('ExerciseRT')}>
                        <Text style={styles.buttonText}>EXERCISES</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('SettingsRT')}>
                        <Text style={styles.buttonText}>SETTINGS</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 6,
        backgroundColor: '#1A5097'
    },
    buttonRow: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1
    },
    buttonStyles:{
        backgroundColor: '#1A5097',
        height: '50%',
        width: '50%',
        justifyContent:'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#ffffff',
        fontSize: 22
    }
});
