/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, View, Button } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import Langage from './screens/Langauge/Langauge';
import MenuDrawer from './screens/MenuDrawer/MenuDrawer';

class MainScreen extends React.Component {
  render(){
    return (
      <MenuDrawer />
    )
  }
}

class DetailsScreen extends React.Component {
  render(){
    return(
      <View>
        <Text>This is my details screen</Text>
        <Button title='Go to Details' onPress= {() => this.props.navigation.navigate('Details')} />
      </View>
    )
  }
}

//entry point (root component) for the app
const RootStack = createStackNavigator (
  {
    Home: Langage,
    Main : MainScreen,
    Details : DetailsScreen
  },{
    initialRouteName : 'Home',
  }
)

export default class App extends React.Component {
  render(){
    return <RootStack />
  }
}