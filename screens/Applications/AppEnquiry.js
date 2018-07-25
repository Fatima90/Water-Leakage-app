import React from 'react';
import { View, Text, Button, DrawerLayoutAndroid } from 'react-native';

class AppEnquiry extends React.Component {
    static navigationOptions = {
        title: 'AppEnquiry',
    };
    render(){
        return (
            <View>
            <Text>This is Application enquiry page</Text>
            </View>
        )
    }
}

export default AppEnquiry;