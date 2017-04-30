/**
 * 阅读组件
 */
import React, {Component} from "react";
import {NavigatorIOS, ScrollView, StyleSheet, View} from "react-native";
import Category from "./read/category";
import Topic from "./read/topic";
import Search from "./read/search";
import Recommend from "./read/recommend";
import Hr from "./read/hr";

// A. 实现class的继承

class readView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

            isShow: false

        };
    }

    render() {

        return (

            <View style={styles.container}>
                <Search/>
                <Hr/>
                {
                    this.state.isShow ? <ScrollView style={styles.container}>

                        <Topic/>
                        <Hr/>
                        <Recommend/>
                        <Hr/>
                        <Category/>
                        <Hr/>
                        <Recommend/>
                    </ScrollView> : null
                }


            </View>
        );

    }

    // TODO: featch 数据
    componentDidMount() {

        this.setState({

                          isShow: true
                      });

    }

}

class read extends Component {

    render() {

        return (
            <NavigatorIOS
                initialRoute={{
                    component: readView,
                    title: '阅读',
                    navigationBarHidden: true,
                }}
                style={{flex: 1}}
            />
        );

    }

}

const styles = StyleSheet.create({

                                     container: {
                                         flex: 1
                                     }

                                 });

// B. 提供组件导入方式
module.exports = read;