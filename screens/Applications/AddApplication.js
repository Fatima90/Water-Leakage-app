import React from 'react';
import { View, Text, Button, DrawerLayoutAndroid } from 'react-native';

class AddApplication extends React.Component {
    static navigationOptions = {
        title: 'Add Application',
    };
    render(){
        return (
            <View>
            <Text>This is Add Application page</Text>
            </View>
        )
    }
}

export default AddApplication;