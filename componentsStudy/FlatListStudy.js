import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

export default class FlatListStudy extends Component {
    constructor(props) {
        super(props);
        this.state ={
            list: [
                {
                    key: "pink",
                    data: {
                        title: "粉红色",
                        color: "pink"
                    }
                }, 
                {
                    key: "grey",
                    data: {
                        title: "灰色",
                        color: "grey"
                    }
                }, 
                {
                    key: "orange",
                    data: {
                        title: "橙色",
                        color: "orange"
                    }
                }, 
                {
                    key: "blue",
                    data: {
                        title: "蓝色",
                        color: "blue"
                    }
                }, 
                {
                    key: "purple",
                    data: {
                        title: "紫色",
                        color: "purple"
                    }
                }]
        }
    }

    _renderItem = ({item}) => {
        return (
            <View>
                style={{backgroundColor: item.data.color, width: 200, height: 100}}>
                <Text>{item.data.title}</Text>
            </View>
        )
    }

    render(){
        return (
            <FlatList 
                data = {this.state.list} 
                renderItem={this._renderItem}>
            </FlatList>
        );
    }
}