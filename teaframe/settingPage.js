/**
 * 设置组件
 */
import React, {Component} from "react";
import {
    Image,
    NavigatorIOS,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Utils from "./utils";
import Detail from "./setting/detail";
import Help from "./setting/help";
import Tips from "./setting/tips";
import About from "./setting/about";

// A. 实现class的继承

class settingView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {

        return (
            <ScrollView>
                <View style={styles.img_view}>
                    <Image style={styles.icon}
                           source={{uri: 'http://www.yangzhengyou.com/images/map/logo.png'}}
                           resizeMode="contain"/>
                    <Text style={styles.version}>v1.0.0</Text>
                </View>
                <TouchableOpacity style={styles.text_view} navigator={this.props.navigator}
                                  onPress={this._goPage.bind(this, Detail, '功能介绍')}>
                    <Text style={styles.text}>功能介绍</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.text_view} navigator={this.props.navigator}
                                  onPress={this._goPage.bind(this, Help, '帮助中心')}>
                    <Text style={styles.text}>帮助中心</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.text_view} navigator={this.props.navigator}
                                  onPress={this._goPage.bind(this, Tips, '服务条款')}>
                    <Text style={styles.text}>服务条款</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.text_view, styles.bottom_add]}
                                  navigator={this.props.navigator}
                                  onPress={this._goPage.bind(this, About, '关于')}>
                    <Text style={styles.text}>关于</Text>
                </TouchableOpacity>

            </ScrollView>
        );

    }

    _goPage(component, title) {

        this.props.navigator.push({
                                      component: component,
                                      title: title,
                                  });

    };

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
                                         paddingLeft: 16,
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
                                     },
                                     version: {

                                         fontSize: 13,
                                         fontWeight: '300',
                                         marginBottom: 30,

                                     },
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