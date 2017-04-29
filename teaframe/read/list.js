/**
 * 列表.
 */
import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

// A. 实现class的继承

class list extends Component {

    render() {

        return (
            <View>
                <Text style={styles.text}>列表 </Text>
            </View>
        );

    }

}

const styles = StyleSheet.create({

                                     text: {
                                         fontSize: 20
                                     }

                                 });

// B. 提供组件导入方式
module.exports = list;