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
import Utils from "./utils";

// A. 实现class的继承

class readView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

            isShow: false,

        };
    }

    render() {

        return (

            <View style={styles.container}>
                <Search/>
                <Hr/>
                {
                    this.state.isShow ? <ScrollView style={styles.container}>

                        <Topic data={this.state.recommendTopic}/>
                        <Hr/>
                        <Recommend name="热门推荐" data={this.state.hotTopic}/>
                        <Hr/>
                        <Category data={this.state.category} navigator={this.props.navigator}/>
                        <Hr/>
                        <Recommend name="清新一刻" data={this.state.other}/>
                        <View style={styles.topHeader}></View>
                    </ScrollView> : null
                }


            </View>
        );

    }

    // TODO: featch 数据
    componentDidMount() {

        let that = this;
        // http://localhost:3000/data/read?type=config 本机环境
        // http://123.57.39.116:3000/data/read?type=config // 线上环境
        Utils.get('http://192.168.23.70:3000/data/read?type=config', function (data) {

            if (data.status === 1) {
                let obj = data.data;
                let hotTopic = obj.hotTopic;
                let other = obj.other;
                let category = obj.category;
                let recommendTopic = obj.recommendTopic;
                that.setState({
                                  isShow: true,
                                  recommendTopic: recommendTopic,
                                  category: category,
                                  other: other,
                                  hotTopic: hotTopic,
                              });
            } else {

            }

        }, function (err) {

        })

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
                                     },
                                     topHeader: {
                                         height: 55
                                     }

                                 });

// B. 提供组件导入方式
module.exports = read;