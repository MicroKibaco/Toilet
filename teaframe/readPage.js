/**
 * 阅读组件
 */
import React, {Component} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import Category from "./read/category";
import Topic from "./read/topic";
import Search from "./read/search";
import Recommend from "./read/recommend";
import Hr from "./read/hr";

// A. 实现class的继承

class readPage extends Component {

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

            <View>
                <Search/>
                <Hr/>
                {
                    this.state.isShow ? <ScrollView>

                        <Topic/>
                        <Recommend/>
                        <Category/>
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

const styles = StyleSheet.create({

                                     text: {
                                         fontSize: 20
                                     }

                                 });

// B. 提供组件导入方式
module.exports = readPage;