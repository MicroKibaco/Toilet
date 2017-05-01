/**
 * 列表.
 */
import React, {Component} from "react";
import {Image, ListView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Utils from "./../utils";
import MyWebView from "./../myWebview";

// A. 实现class的继承

class list extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            url: props.url,
            dataSource: ds.cloneWithRows([]),
            navigator: props.navigator,
        };

    };

    render() {

        return (
            <ListView
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => (<TouchableOpacity style={styles.item}
                                                           onPress={this._onShowWebPage.bind(this,
                                                                                             rowData.url,
                                                                                             rowData.title)}>
                    <View>
                        <Image resizeMethod='scale' style={styles.img}
                               source={{uri: rowData.img}}/>
                    </View>
                    <View style={styles.text_wraper}>
                        <Text style={styles.title}
                              numberOfLines={1}>{rowData.title}</Text>
                        <Text style={styles.time}>{rowData.time}</Text>
                    </View>
                </TouchableOpacity>)}
            />
        );

    };

    _onShowWebPage(url, title) {

        this.state.navigator.push({

                                      component: MyWebView,
                                      title: title,
                                      passProps: {
                                          url: url
                                      },
                                  });

    }

    componentDidMount() {

        let url = this.state.url;
        let that = this;
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        Utils.get(url, function (data) {
            if (data.status) {
                let obj = data.data;
                that.setState({
                                  dataSource: ds.cloneWithRows(obj),
                              });

            } else {
                alert('服务异常,紧急修复,请耐心等待!');
            }
        }, function (err) {
            alert('服务异常,紧急修复,请耐心等待!');
            console.log(err);
        });

    };

}
const styles = StyleSheet.create({

                                     item: {

                                         height: 78,
                                         paddingLeft: 10,
                                         paddingRight: 10,
                                         borderBottomColor: '#EDEDED',
                                         borderBottomWidth: Utils.pixel,
                                         flexDirection: 'row',

                                     },

                                     img: {
                                         width: 60,
                                         height: 60,
                                         borderRadius: 3,
                                         marginTop: 7,
                                     },

                                     text_wraper: {
                                         marginLeft: 6,
                                         flex: 1,

                                     },

                                     title: {

                                         fontSize: 16,
                                         marginTop: 10,

                                     },
                                     time: {

                                         color: '#DDDDDD',
                                         fontSize: 13,
                                         marginTop: 5,

                                     },

                                 });

// B. 提供组件导入方式
module.exports = list;