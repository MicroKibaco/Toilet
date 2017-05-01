/**
 * 分类
 */
import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Utils from "./../utils";
import List from "./list";

// A. 实现class的继承

class category extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: props.data,
            navigator: props.navigator,
        };
    }

    render() {

        let data = this.state.data;
        let views1 = [];
        let views2 = [];
        for (let i in data) {

            if (data.hasOwnProperty(i)) {

                let item = (
                    <TouchableOpacity style={styles.row_item} key={i}
                                      onPress={this._goToList.bind(this, data[i].text)}>
                        <View style={styles.item}>
                            <Text style={styles.title}>{data[i].text}</Text>
                        </View>
                    </TouchableOpacity>);

                if (i < 2) {

                    views1.push(item);

                } else {

                    views2.push(item);

                }

            }
        }

        return (
            <View style={styles.container}>
                <Text style={styles.text1}>分类 </Text>
                <View style={styles.row}>
                    {views1}

                </View>
                <View style={styles.row}>
                    {views2}
                </View>
            </View>
        );

    }

    // 跳转列表页面
    _goToList(name) {
        let type = this._getType(name);
        let url = 'http://192.168.23.70:3000/data/read?type=' + type;
        this.state.navigator.push({
                                      component: List,
                                      title: name,
                                      barTintColor: '#fff',
                                      passProps: {
                                          url: url
                                      },
                                  });

    };

    _getType(name) {
        let type = '';
        switch (name) {
            case '互联网':
                type = 'it';
                break;
            case '笑话':
                type = 'cookies';
                break;
            case '散文':
                type = 'sanwen';
                break;
            case '管理':
                type = 'manager';
                break;
            default:
                type = 'it';
                break;
        }
        return type;
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