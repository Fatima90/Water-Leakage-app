import React from 'react';
import { Text, View } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Home from './screens/Home/Home';
import Langage from './screens/Langauge/Langauge';

import Complaint from './screens/Complaint/Complaint';
import AddComplain from './screens/Complaint/AddComplain';


import Enquiry from './screens/Enquiry/Enquiry';
import Bill from './screens/Enquiry/Bill';
import Rations from './screens/Enquiry/Rations';

import Application from './screens/Applications/Application';
import AppEnquiry from './screens/Applications/AppEnquiry';
import AddApplication from './screens/Applications/AddApplication';



class Settings extends React.Component {
  static navigationOptions = {
    title: 'settings',
  }
  render(){
    return(
    <View>
      <Text>This is settings page</Text>
    </View>
    )
  }
}

class Contact extends React.Component {
  static navigationOptions = {
    title: 'Contact Us',
  }
  render(){
    return(
    <View>
      <Text>This is Contact us page</Text>
    </View>
    )
  }
}


export const Stack = StackNavigator({
  Main : {screen : Langage},
  Home: { screen: Home },
  Complaint : {screen : Complaint},
  AddComplain : {screen : AddComplain},
  Enquiry : {screen : Enquiry},
  Bill : {screen : Bill},
  Rations : {screen : Rations},
  Application : {screen: Application},
  AddApplication : AddApplication,
  AppEnquiry : AppEnquiry,
  Settings : {screen : Settings},
  Contact : {screen : Contact}
}, {
  initialRouteName: 'Main',
})

//entry point (root component) for the app
export const Drawer = DrawerNavigator({
  Home: { screen: Stack },
  Complaint : Complaint,
  Enquiry : {screen : Enquiry},
  Application : {screen: Application},
  Settings : {screen : Settings},
  Contact : {screen : Contact},
})


