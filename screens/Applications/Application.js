import React from 'react';
import { Text, View, Button } from 'react-native';


class Application extends React.Component {
    static navigationOptions = {
        title: 'Application',
    }

    handleAdd = () => {
      this.props.navigation.navigate('AddApplication');
    };

    handleEnquiry = () => {
      this.props.navigation.navigate('AppEnquiry');
    };


    render(){
      return(
      <View>
        <Text>This is Application page</Text>
        <Button title="New Application" onPress={this.handleAdd}/>
        <Button title="Enquiry Application" onPress={this.handleEnquiry}/>
      </View>
       )
     }
  }

  export default Application;