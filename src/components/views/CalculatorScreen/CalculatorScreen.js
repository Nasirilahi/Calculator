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
import HeaderLeftButton from './CalculatorScreen-components/HeaderLeftButton';
import COLORS from '../../../constants/colorConstants';
/**
 * 
 * reset action to go back to previous screen
 */
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
    headerLeft:  <HeaderLeftButton onBackPress={ () => navigation.dispatch(resetAction)} />,
  });
  render(){
      return(
        <LinearGradient 
            colors={['#43C6AC', '#191654']} 
            style={styles.container}
        >
          <StatusBar
            backgroundColor={COLORS.white}
            barStyle="light-content"
          />
          <InputContainer />
          <ButtonContainer />
        </LinearGradient>
    );
  }
}


export default CalculatorScreen;