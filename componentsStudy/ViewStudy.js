import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default  class ViewStudy extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <View style={styles.one}> 
                    <Text>I come from China</Text>
                </View>
                <View style={styles.two}>
                    <Text>I'm studying Computer Science</Text>
                </View>
                <View style={styles.three}>
                    <Text>in WSU-Tricity now.</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderStyle: "dashed",
        borderColor: "red",
        padding: 20,
        width: 300,
        height: 100,
        marginTop: 20,
    },
    one: {
        height: 20, 
    },
    two: {
        height: 30,
    },
    three: {
        height: 40,
    }
});