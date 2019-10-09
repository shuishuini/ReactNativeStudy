import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'

export default class DimensionStudy extends Component {
    constructor(props) {
        super(props);
        this.state ={
        };
    }

    render() {
        return(
            <View>
                <View style={styles.view1}></View>
                <View style={styles.view2}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view1: {
        // Dimensions可以动态获取屏幕的宽高，用这个宽高我们可以根据需求自己计算
        // 使用它的时候主要是因为我们不能确定父盒子的宽高与屏幕的关系
        width: Dimensions.get("window").width / 2,
        height: 50,
        backgroundColor: "green",
    },
    view2: {
        width: Dimensions.get("window").width / 3 * 2,
        height: 50,
        backgroundColor: "orange",
    }
})