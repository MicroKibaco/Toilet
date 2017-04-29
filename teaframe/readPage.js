/**
 * 阅读组件
 */
import React, {Component} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import Category from "./read/category";
import Topic from "./read/topic";
import Search from "./read/search";
import Recommend from "./read/recommend";

// A. 实现class的继承

class readPage extends Component {

    render() {

        return (

            <View>
                <Search/>
                <ScrollView>

                    <Topic/>
                    <Recommend/>
                    <Category/>
                    <Recommend/>
                </ScrollView>

            </View>
        );

    }

}

const styles = StyleSheet.create({

                                     text: {
                                         fontSize: 20
                                     }

                                 });

// B. 提供组件导入方式
module.exports = readPage;