import React, { Component } from 'react';
import {
    View, 
    Text,
    Animated,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions } from 'react-navigation'

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MakeProfile'})
  ]
})

const CalculatorScreen = ({ navigation }) => {
    return(
        <LinearGradient colors={['#E8CBC0', '#636FA4','green']} style={styles.container}>
            <StatusBar 
            translucent
             barStyle="light-content"
            />
        

        </LinearGradient>
    );
}

CalculatorScreen.navigationOptions = {
    header:null
};

export default CalculatorScreen;