import React from 'react';
import { View, Text, Button, DrawerLayoutAndroid } from 'react-native';

class Rations extends React.Component {
    static navigationOptions = {
        title: 'Rations',
    };
    render(){
        return (
            <View>
            <Text>This is Rations page</Text>
            </View>
        )
    }
}

export default Rations;