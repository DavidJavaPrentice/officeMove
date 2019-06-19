import React from 'react';
import { StyleSheet, Image } from 'react-native';

export class Stepcounter extends React.Component {
    render(){
        return(
            <Image
                style={styles.heroImage}
                source={ require('./img/stepcounterplaceholder.png')}
                />
        )
    }

}

const styles = StyleSheet.create ({
    heroImage: {
        width: undefined,
        height: undefined,
        flex: 6,
    }
});