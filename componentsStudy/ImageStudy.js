import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

let pic = {
    uri: 'https://steemitimages.com/p/TZjG7hXReeVoAvXt2X6pMxYAb3q65xMju8wryWxKrsghkLDPm382RsEs9vWzPZ2MBncaCs267CxQMEbHVExYnARYndyXe1BLewZ2idEDZa3mfqtHTqEVJ6RuLYsFp52VZNomB57dhRzmft?format=match&mode=fit'
};

export default class ImageStudy extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render(){
        return (
            <View>
                {/* 图片资源使用source属性设置，不是src */}
                {/* 网络图片必须自己设置宽高，否则不予显示 */}
                <Image source={pic} style={ styles.image }></Image>
                <Text>I love summer！！！</Text>
                <Image source={require("./images/2.jpg")} style={ styles.image }></Image>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 90
    }
})