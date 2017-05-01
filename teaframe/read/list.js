/**
 * 列表.
 */
import React, {Component} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import Utils from "./../utils";

// A. 实现class的继承

class list extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        //   console.log(props.url);
        this.state = {
            url: props.url
        };

    }

    render() {

        return (
            <View>
                <View style={styles.item}>
                    <View>
                        <Image source={{uri: ''}}/>
                    </View>
                    <View>
                        <Text>标题</Text>
                        <Text>2017-05-01</Text>
                    </View>
                </View>
            </View>
        );

    }

}

const styles = StyleSheet.create({

                                     item: {

                                         height: 78,
                                         paddingLeft: 10,
                                         paddingRight: 10,
                                         borderBottomColor: '#EDEDED',
                                         borderBottomWidth: Utils.pixel,

                                     }

                                 });

// B. 提供组件导入方式
module.exports = list;