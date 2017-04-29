/**
 * 搜索
 */
import React, {Component} from "react";
import {StyleSheet, TextInput, View} from "react-native";

import Utils from "./../utils";

// A. 实现class的继承

class search extends Component {

    render() {

        return (
            <View style={styles.container}>
                <TextInput style={styles.search_input} placeholder='搜索'
                           placeholderTextColor='#5e6877'></TextInput>
            </View>
        );

    }

}

const styles = StyleSheet.create({

                                     container: {

                                         paddingLeft: 10,
                                         paddingRight: 10,
                                         marginTop: 20,

                                     },

                                     search_input: {

                                         height: 35,
                                         borderWidth: Utils.pixel,
                                         paddingLeft: 5,
                                         borderColor: "#EEEEEE",
                                         borderRadius: 3,
                                         fontSize: 15,

                                     }

                                 });

// B. 提供组件导入方式
module.exports = search;