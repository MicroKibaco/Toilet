/**
 * 设置组件
 */
import React, {Component} from "react";
import {Image, NavigatorIOS, ScrollView, StyleSheet, Text, View} from "react-native";
import Utils from "./utils";

// A. 实现class的继承

class settingView extends Component {

    render() {

        return (
            <ScrollView>
                <View style={styles.img_view}>
                    <Image style={styles.icon}
                           source={{uri: 'http://www.yangzhengyou.com/images/map/logo.png'}}
                           resizeMode="contain"/>
                </View>
                <View style={styles.text_view} navigator={this.props.navigator}>
                    <Text style={styles.text}>功能介绍</Text>
                </View>
                <View style={styles.text_view} navigator={this.props.navigator}>
                    <Text style={styles.text}>帮助中心</Text>
                </View>
                <View style={styles.text_view} navigator={this.props.navigator}>
                    <Text style={styles.text}>服务条款</Text>
                </View>
                <View style={[styles.text_view, styles.bottom_add]}
                      navigator={this.props.navigator}>
                    <Text style={styles.text}>关于</Text>
                </View>

            </ScrollView>
        );

    }

}

const styles = StyleSheet.create({

                                     icon: {
                                         width: 88,
                                         height: 100,
                                     },
                                     img_view: {
                                         justifyContent: 'center',
                                         alignItems: 'center',
                                         marginTop: 40,
                                     },
                                     text_view: {
                                         borderTopWidth: Utils.pixel,
                                         borderTopColor: '#ECECEC',
                                         height: 40,
                                         paddingLeft: 10,
                                         justifyContent: 'center'
                                     },
                                     text: {
                                         fontSize: 16,
                                         color: '#868887',
                                         fontWeight: '400',
                                     },

                                     bottom_add: {
                                         borderBottomWidth: Utils.pixel,
                                         borderBottomColor: "#ECECEC",
                                     }
                                 });

class setting extends Component {
    render() {
        return ( <NavigatorIOS

                initialRoute={
                    {
                        component: settingView,
                        title: '设置',
                        navigationBarHidden: true,
                    }
                }

                style={{flex: 1}}
            />

        );
    }
}

// B. 提供组件导入方式
module.exports = setting;