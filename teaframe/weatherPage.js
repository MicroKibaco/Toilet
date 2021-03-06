/**
 * 天气组件
 */
import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import MyWebView from "./myWebview";
// A. 实现class的继承

class weatherPage extends Component {

    render() {

        return (
            <View style={styles.container}>
                <MyWebView
                    url="http://www.yangzhengyou.com/html/weather.html"/>
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
module.exports = weatherPage;