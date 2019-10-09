import React from 'react';
import { StyleSheet, View, Text, TextInput} from 'react-native';

export default class TextInputStudy extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            val: ""
        };
    }

    _changeText = (newText) => {
        console.log({val: newText});
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>{this.state.val}</Text>
                <TextInput
                style= {styles.input }
                placeholder="Please enter here:"
                value={this.state.val}
                onChangeText={this._changeText}>
                </TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee",
    },
    input: {
        paddingLeft: 5,
        width: 200,
        borderWidth: 2,
        borderColor: "pink",
        borderRadius: 5
    }
})