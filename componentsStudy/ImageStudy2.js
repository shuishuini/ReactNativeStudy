import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class ImageStudy2 extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            images: [
                require("./images/2.jpg"),
                require("./images/1.jpeg"),
            ]   
        }
    }

    render() {
        return (
            <View>
                {
                    this.state.images.map((img, i) => (
                        <Image key={i} source={img} style={ styles.image }></Image>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60
    }
})