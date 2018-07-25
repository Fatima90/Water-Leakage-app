import React from 'react';
import { View, Text, Button, DrawerLayoutAndroid } from 'react-native';

class Complaint extends React.Component {
    static navigationOptions = {
        title: 'Complaint',
    };

    handleSettingsPress = () => {
        this.props.navigation.navigate('AddComplain');
    };

    render(){
        return (
            <Button title="Add complain" onPress={this.handleSettingsPress}/>
        )
    }
}

export default Complaint;