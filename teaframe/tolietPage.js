/**
 * 卫生间组件
 */
import React, {Component} from "react";
import {StyleSheet, View, WebView} from "react-native";

// A. 实现class的继承

class tolietPage extends Component {

    render() {

        return (
            <View style={styles.container}>
                <WebView source={{uri: 'http://www.baidu.com'}} style={{marginTop: -20}}/>
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