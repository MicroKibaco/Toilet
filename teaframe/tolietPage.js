/**
 * 卫生间组件
 */
import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Mywebview from "./myWebview";

// A. 实现class的继承

class tolietPage extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Mywebview url='http://www.baidu.com'/>
            </View>
        );

    }

}

const styles = StyleSheet.create({

                                     container: {
                                         flex: 1
                                     }

                                 });

// B. 提供组件导入方式
module.exports = tolietPage;