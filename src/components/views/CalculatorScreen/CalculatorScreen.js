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
import Button from './CalculatorScreen-components/Button';
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
                <View style={styles.inputBar}>
                    <Text style={styles.value}>{ 'this.props.calculator.result '}</Text>
                </View>
              
                <View style={styles.gridRow}>
                    <Button value="1" onPress={ () => console.log('@@@') } />
                    <Button value="2" onPress={ () => console.log('@@@')  } />
                    <Button value="3" onPress={ () => console.log('@@@')  } />
                    <Button value="/" onPress={ () => console.log('@@@')  } />
                </View>
                <View style={styles.gridRow}>
                    <Button value="4" onPress={ () => console.log('@@@')  } />
                    <Button value="5" onPress={ () =>console.log('@@@')  } />
                    <Button value="6" onPress={ () => console.log('@@@')  } />
                    <Button value="x" onPress={ () => console.log('@@@')  } />
                </View>
                <View style={styles.gridRow}>
                    <Button style="dark"  value="7" onPress={ () => console.log('@@@')  } />
                    <Button style="dark"  value="8" onPress={ () => console.log('@@@')  } />
                    <Button style="dark" value="9" onPress={ () => console.log('@@@')  } />
                    <Button style="dark" value="-" onPress={ () => console.log('@@@')  } />
                </View>
                <View style={styles.gridRow}>
                    <Button style="dark"  value="0" onPress={ () => console.log('@@@')  } />
                    <Button style="dark" value="." onPress={ () => console.log('@@@')  }  />
                    <Button style="dark" value="=" onPress={ () => console.log('@@@')  } />
                    <Button style="dark" value="+" onPress={ () => console.log('@@@')  } />
                </View>
                 <View style={styles.clearGridRow}>
                    <Button style="dark"  value="CLEAR" onPress={ () => console.log('@@@') }/>
                </View>
        </LinearGradient>
    );
  }
}


export default CalculatorScreen;