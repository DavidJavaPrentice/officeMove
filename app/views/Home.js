import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '../sections/Header.js';
import { Stepcounter } from '../sections/Stepcounter.js';
import { Menu } from '../sections/Menu.js';

export class Home extends React.Component {
    static navigationOptions = {
        header: null
    };

    render(){
        const { navigate } = this.props.navigation;

        return(
            <View style={styles.container}>
                <Header message = 'Press to Login' />
                <Stepcounter />
                <Menu navigate = {navigate} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});