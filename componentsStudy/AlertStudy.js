import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert, Button } from 'react-native'

export default class AlertStudy extends Component {

    _alert1 = () => {
        Alert.alert("How are you!?",null,null);
    }

    _alert2 = () => {
        Alert.alert("How are you!?","Not so well!",null);
    }

    _alert3 = () => {
        Alert.alert("How are you!?","Not so well!",[
            {text: "Cancel", onPress:() => {console.log("Whatever")}},
            {text: "Sure", onPress:() => {console.log("Follow you")}},
            {text: "Ah?", onPress:() => {console.log("What do you want?")}},
        ]);
    }

    render(){
        return (
            <View>
                <Button onPress={this._alert1} title="The easiest Alert"></Button>
                <Button onPress={this._alert2} title="The complicated Alert"></Button>
                <Button onPress={this._alert3} title="The Alert has more functions"></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})