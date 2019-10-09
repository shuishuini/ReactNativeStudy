import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class TextStudy extends React.Component {
    render() {
        return (
            //Text组件允许互相嵌套，但是不允许嵌套其他组件
            //在RN中，父文本的样式可以传递给后代文本，也就是样式继承
            //但是除了文本之外，其它组件都无法继承样式，比如View就不行
            <Text style={ styles.container }>
                <Text>啦啦啦啦</Text>
                <Text>我是卖报的小画家</Text>
                <Text>我是行内元素，一行显示！！！</Text>
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        fontSize: 15,
        lineHeight: 30,
        color: "red"
    }
})