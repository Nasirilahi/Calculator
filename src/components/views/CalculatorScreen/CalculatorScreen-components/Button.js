import React, { Component, PropTypes } from 'react';
import {
    View, 
    Text,
    Animated,
    StatusBar,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import COLORS from '../../../../constants/colorConstants';

const Button = ({style, value, onPress}) => {
        let touchUnderlay = style === 'dark' ? '#43C6AC' : '#191654';
        return (
            <TouchableHighlight underlayColor={touchUnderlay} style={styles.base} onPress={ onPress }>
                <View style={styles.button}>
                    <Text style={styles.text}>{ value }</Text>
                </View>
            </TouchableHighlight>
        );
}

const styles = StyleSheet.create({
    base: {
        flex: .25,
        borderRightWidth: 1,
        borderRightColor: '#fff',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
        color:COLORS.white,
    }
});

export default Button;
