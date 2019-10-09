import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class ScrollViewStudy extends Component {
    constructor(props) {
        super(props);
        this.state ={
            list: ["pink", "grey", "orange", "blue","purple"]
        }
    }

    render(){
        return (
            <ScrollView>
                {/* 如果内容超出屏幕，默认情况下是不能拖动查阅的，包裹了scrollview之后就可以解决 */}
                {/* 无论列表有多少，都实时渲染 */}
                {
                    this.state.list.map(color => (
                        <View 
                            key={color} 
                            style={{backgroundColor: color, width: 200, height: 100}}>
                            <Text>{color}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        )
    }
}