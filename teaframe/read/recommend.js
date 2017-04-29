/**
 * 推荐
 */
import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

// A. 实现class的继承

class recommend extends Component {

    render() {

        return (
            <View>
                <View>
                    <Text>推荐专题</Text>
                </View>

                <View>
                    <View></View>
                    <View></View>
                </View>
                <View>
                    <Text>查看更多同期专题</Text>
                </View>
            </View>
        );

    }

}

const styles = StyleSheet.create({});

// B. 提供组件导入方式
module.exports = recommend;