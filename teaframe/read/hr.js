/**
 * 虚线
 */
/**
 * 设置组件
 */
import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Utils from "./../utils";

// A. 实现class的继承

class hr extends Component {

    render() {

        return (
            <View>
                <View style={styles.hr}></View>
            </View>
        );

    }

}

const styles = StyleSheet.create({

                                     hr: {
                                         borderColor: '#F0F0F0',
                                         borderRadius: Utils.pixel,
                                         marginTop: 10,
                                     }

                                 });

// B. 提供组件导入方式
module.exports = hr;