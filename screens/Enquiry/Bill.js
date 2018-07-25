import React from 'react';
import { View, Text, Button, DrawerLayoutAndroid } from 'react-native';

class Bill extends React.Component {
    static navigationOptions = {
        title: 'Bill',
    };
    render(){
        return (
            <View>
            <Text>This is Bill page</Text>
            </View>
        )
    }
}

export default Bill;