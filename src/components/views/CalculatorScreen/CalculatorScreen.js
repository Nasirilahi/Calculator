import React, { Component, PropTypes } from 'react';
import {
    View, 
    Text,
    Animated,
    StatusBar,
    TouchableHighlight
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions } from 'react-navigation'

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
});

class CalculatorScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text style={styles.headerTitle}>{'Calculator'}</Text>,
    headerStyle:styles.headerStyle,
    headerLeft:
  });
  
    render(){
         return(
        <LinearGradient 
            colors={['#43C6AC', '#191654']} 
            style={styles.container}
        >
    

        </LinearGradient>
    );
    }
}


export default CalculatorScreen;