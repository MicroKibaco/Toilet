/**
 * 推荐专题
 */
import React, {Component} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Utils from "./../utils";
import MyWebView from "./../myWebview";

// A. 实现class的继承

class topic extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: props.data
        };
    }

    render() {

        let views = [];
        let data = this.state.data;
        // console.log(data);

        for (let i in data) {
            if (data.hasOwnProperty(i)) {
                views.push(
                    <TouchableOpacity style={styles.img_item} key={i}
                                      onPress={this._onShowWebPage.bind(this, data[i].url,
                                                                        data[i].title)}>
                        <Image resizeMethod='scale' style={styles.img}
                               source={{uri: data[i].img} }/>
                    </TouchableOpacity>
                );
            }
        }

        return (

            <View style={styles.container}>
                <View>
                    <Text style={styles.text1}>推荐专题</Text>
                </View>

                <View style={styles.img_view}>
                    {views}
                </View>
                <View>
                    <Text style={styles.text2}>查看更多同期专题&gt;</Text>
                </View>
            </View>
        );

    }

    _onShowWebPage(url, title) {

        this.props.navigator.push({
                                      component: MyWebView,
                                      title: title,
                                      passProps: {
                                          url: url
                                      },
                                  }
        );
    }

}

const styles = StyleSheet.create({

                                     container: {

                                         marginLeft: 10,
                                         marginRight: 10,
                                         marginTop: 10,

                                     },

                                     img: {
                                         width: (Utils.size.width - 30) / 2,
                                         height: 80,
                                         borderRadius: 5,
                                     },

                                     img_view: {
                                         flexDirection: 'row'

                                     },
                                     img_item: {
                                         flex: 1
                                     },

                                     text1: {
                                         color: '#5E5E5E',
                                         marginBottom: 8,
                                         fontSize: 17
                                     },
                                     text2: {
                                         color: '#ccc',
                                         fontSize: 13,
                                         marginTop: 10,
                                         fontWeight: '300',
                                         /*marginBottom: 10,*/

                                     },

                                 });

// B. 提供组件导入方式
module.exports = topic;