import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class TextStudy extends React.Component {
    render() {
        return (
            //Text组件允许互相嵌套，但是不允许嵌套其他组件
            <View>
                <Text>啦啦啦啦</Text>
                <Text>我是卖报的小画家</Text>
                <Text>我是我是行内元素，一行显示！！！</Text>
            </View>
        )
    }
}