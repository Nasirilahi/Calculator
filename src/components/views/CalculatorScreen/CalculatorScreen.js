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


const inputButtons = [
  [7, 8, 9, '*'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '=', '/']
];



class CalculatorScreen extends Component {
     _renderInputButtons =  () =>  {
    let views = []

    for (var r = 0; r < inputButtons.length; r++) {
      let row = inputButtons[r]

      let inputRow = []
      for (var i = 0; i < row.length; i++) {
        let input = row[i]

        inputRow.push(
          <Button
            value={input}
            highlight={this.props.selectedSymbol === input}
            key={r + '-' + i} />
        )
      }

      views.push(<View style={styles.inputRow} key={'row-' + r}>{inputRow}</View>)
    }

    return views
  }

    render(){
         return(
        <LinearGradient 
            colors={['#43C6AC', '#191654']} 
            style={styles.container}
        >
            <StatusBar 
            translucent
             barStyle="light-content"
            />
                <View style={styles.displayContainer}>
                <Text style={styles.displayText}>{this.props.inputValue}</Text>
                </View>
                <View style={styles.inputContainer}>
                {this._renderInputButtons()}
                </View>

        </LinearGradient>
    );
    }
}

  

CalculatorScreen.propTypes = {
  selectedSymbol: PropTypes.string
}

CalculatorScreen.navigationOptions = {
    header:null
};

class Button extends Component {
  constructor (props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }

  render () {
    return (
      <TouchableHighlight
        style={[styles.inputButton, this.props.highlight ? styles.inputButtonHighlighted : null]}
        underlayColor='#193441'
        onPress={this.onPress}>
        <Text style={styles.inputButtonText}>
          {this.props.value}
        </Text>
      </TouchableHighlight>
    )
  }

  onPress () {
    this.props.actions.buttonPress(this.props.value)
  }
}


Button.propTypes = {
  highlight: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
}


export default CalculatorScreen;