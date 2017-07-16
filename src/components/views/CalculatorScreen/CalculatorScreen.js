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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  addNumber, 
  clear, 
  addOperator, 
  calculate,
  makeFloat,
} from '../../../actions/calculatorActions';
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

  onPress = (value, type) => {
    if(type === 'number'){
      this.props.addNumber(value);
    }
    if(type === 'operator'){
      this.props.addOperator(value);
    }
    if(type === 'calculate'){
      this.props.calculate();
    }
    if(type === 'float'){
      this.props.makeFloat();
    }
    if( type === 'clear'){
      this.props.clearInput();
    }
  }
  
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
                    <Text style={styles.value}>{this.props.result }</Text>
                </View>
              
                <View style={styles.gridRow}>
                    <Button value="1" onPress={ () => this.onPress(1, 'number') } />
                    <Button value="2" onPress={ () => this.onPress(2, 'number')  } />
                    <Button value="3" onPress={ () => this.onPress(3, 'number')  } />
                    <Button value="/" onPress={ () => this.onPress('/', 'operator')  } />
                </View>
                <View style={styles.gridRow}>
                    <Button value="4" onPress={ () => this.onPress(4, 'number')  } />
                    <Button value="5" onPress={ () =>this.onPress(5, 'number')  } />
                    <Button value="6" onPress={ () => this.onPress(6, 'number')  } />
                    <Button value="x" onPress={ () => this.onPress('*', 'operator')  } />
                </View>
                <View style={styles.gridRow}>
                    <Button style="dark"  value="7" onPress={ () => this.onPress(7, 'number')  } />
                    <Button style="dark"  value="8" onPress={ () => this.onPress(8, 'number')  } />
                    <Button style="dark" value="9" onPress={ () => this.onPress(9, 'number')  } />
                    <Button style="dark" value="-" onPress={ () => this.onPress('-', 'operator')  } />
                </View>
                <View style={styles.gridRow}>
                    <Button style="dark"  value="0" onPress={ () => this.onPress(0, 'number')  } />
                    <Button style="dark" value="." onPress={ () => this.onPress('.', 'float')  }  />
                    <Button style="dark" value="=" onPress={ () => this.onPress('=', 'calculate')  } />
                    <Button style="dark" value="+" onPress={ () => this.onPress('+', 'operator')  } />
                </View>
                 <View style={styles.clearGridRow}>
                    <Button style="dark"  value="CLEAR" onPress={ () => this.props.clearInput(null, 'clear') }/>
                </View>
        </LinearGradient>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.calculator.result,
  };
};

const mapDispatchToProps = (dispatch) => {
 return{
        addNumber: bindActionCreators(addNumber, dispatch),
        addOperator:bindActionCreators(addOperator, dispatch),
        clearInput: bindActionCreators(clear, dispatch),
        calculate: bindActionCreators(calculate, dispatch),
        makeFloat: bindActionCreators(makeFloat, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorScreen);