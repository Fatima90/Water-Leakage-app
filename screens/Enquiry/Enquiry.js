import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';


class Enquiry extends React.Component {
    static navigationOptions = {
        title: 'Enquiry',
    }
    handleBill = () => {
      this.props.navigation.navigate('Bill')
    };

    handleRations = () => {
      this.props.navigation.navigate('Rations')
    };
  
    render(){
      return(
      <View>
        <Text>This is Enquiry page</Text>
        <Button title='Bill' onPress={this.handleBill} />
        <Button title='Water Rations' onPress={this.handleRations} />
      </View>
       )
     }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  export default Enquiry;