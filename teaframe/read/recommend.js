/**
 * 推荐
 */
import React, {Component} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Utils from "./../utils";
import MyWebView from "./../myWebview";

// A. 实现class的继承

class recommend extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: props.data,
            name: props.name,
        };
    }

    render() {

        let data = this.state.data;

        let views1 = [];
        let views2 = [];
        for (let i in data) {
            if (data.hasOwnProperty(i)) {
                let page = data[i];
                let item = (<TouchableOpacity style={styles.img_item} key={i}
                                              onPress={this._onShowWebPage.bind(this, page.url,
                                                                                page.title)}>
                    <Image resizeMethod='scale' style={[styles.img, styles.shadow]}
                           source={{uri: page.img} }/>
                    <Text style={styles.text2} numberOfLines={2}>{page.title}</Text>

                </TouchableOpacity>);
                if (i < 4) {

                    views1.push(item);

                } else {
                    views2.push(item);
                }
            }

        }
        return (
            <View style={styles.container}>
                <View>
                    <Text style={[styles.text1, styles.title_top]}>{this.state.name}</Text>
                </View>

                <View style={styles.img_view}>
                    {views1}
                </View>
                <View style={styles.img_view}>
                    {views2}
                </View>
            </View>
        );

    }

    _onShowWebPage(url, title) {

        this.props.navigator.push({

                                      component: MyWebView,
                                      url: url,
                                      title: title,
                                      passProps: {
                                          url: url
                                      },

                                  });

    }

}

const styles = StyleSheet.create({
                                     container: {
                                         marginLeft: 10,
                                         marginRight: 10,
                                     },

                                     title_top: {

                                         marginTop: 10

                                     },

                                     img_view: {
                                         flexDirection: 'row'

                                     },
                                     img_item: {

                                         flex: 1,
                                         height: 157,

                                     },
                                     shadow: {

                                         shadowOpacity: 1,
                                         shadowColor: '#ccc',
                                         shadowOffset: {
                                             width: 1 * Utils.pixel,
                                             height: Utils.pixel,
                                         },

                                     },
                                     img: {
                                         width: (Utils.size.width - 40) / 4,
                                         height: 120,

                                     },
                                     text1: {
                                         color: '#5E5E5E',
                                         marginBottom: 8,
                                         fontSize: 16,
                                     },
                                     text2: {
                                         marginTop: 4,
                                         fontSize: 14,
                                         color: '#818181',
                                     },

                                 });

// B. 提供组件导入方式
module.exports = recommend;