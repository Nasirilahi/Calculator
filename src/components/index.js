import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
import HomeScreen from '../components/views/HomeScreen';
import CalculatorScreen from '../components/views/CalculatorScreen';

const AppNavigator = StackNavigator({
    Home : { screen: HomeScreen },
    Calculator: { screen : CalculatorScreen },
},{
    initialRouteName: 'Calculator',
    mode: 'modal'
}
)

export default class Calculator extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}