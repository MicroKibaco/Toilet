/**
 * 分类
 */
/**
 * 阅读组件
 */
import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import Utils from "./../utils";

// A. 实现class的继承

class category extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text1}>分类 </Text>
                <View style={styles.row}>
                    <View style={styles.row_item}>
                        <View style={styles.item}>
                            <Text style={styles.title}>互联网</Text>
                        </View>
                    </View>
                    <View style={styles.row_item}>
                        <View style={styles.item}>
                            <Text style={styles.title}>散文</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.row}>
                    <View style={styles.row_item}>
                        <View style={styles.item}>
                            <Text style={styles.title}>笑话</Text>
                        </View>
                    </View>
                    <View style={styles.row_item}>
                        <View style={styles.item}>
                            <Text style={styles.title}>管理</Text>
                        </View>
                    </View>

                </View>
            </View>
        );

    }

}

const styles = StyleSheet.create({
                                     container: {

                                         marginLeft: 10,
                                         marginRight: 10,
                                         marginTop: 10,

                                     },
                                     row: {

                                         flexDirection: 'row',
                                         marginTop: 5,

                                     },

                                     row_item: {

                                         flex: 1,
                                         justifyContent: 'center',
                                         alignItems: 'center',

                                     },
                                     item: {

                                         height: 81,
                                         width: (Utils.size.width - 30) / 2,
                                         borderColor: '#F1F1F1',
                                         borderRadius: 5, // Utils.pixel
                                         justifyContent: 'center',
                                         alignItems: 'center',
                                         borderWidth: 1,

                                     },
                                     text1: {
                                         color: '#5E5E5E',
                                         marginBottom: 8,
                                         fontSize: 16,
                                     },

                                     title: {
                                         color: '#707070',
                                         fontSize: 17,
                                         fontWeight: '400',
                                     },
                                 });

// B. 提供组件导入方式
module.exports = category;