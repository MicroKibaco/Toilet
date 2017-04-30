/**
 * 推荐
 */
import React, {Component} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import Utils from "./../utils";

// A. 实现class的继承

class recommend extends Component {

    render() {

        return (
            <View style={styles.container}>
                <View>
                    <Text style={[styles.text1, styles.title_top]}>热门推荐</Text>
                </View>

                <View style={styles.img_view}>
                    <View style={styles.img_item}>
                        <Image resizeMethod='cover' style={[styles.img, styles.shadow]}
                               source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494120375&di=16336d4a0ff2764fd06ba2f9b7a37cb3&imgtype=jpg&er=1&src=http%3A%2F%2Fsucai.qqjay.com%2Fqqjayxiaowo%2F201210%2F26%2F1.jpg'} }/>
                        <Text style={styles.text2} numberOfLines={2}>标题标题标题标题标题标题标题标题标题标题标题标题</Text>

                    </View>
                    <View style={styles.img_item}>
                        <Image resizeMethod='cover' style={[styles.img, styles.shadow]}
                               source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494120446&di=e0b4ebb154241bd783c8a9e801383399&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fcefc1e178a82b9017ad72597738da9773912ef18.jpg'} }/>
                        <Text style={styles.text2} numberOfLines={2}>标题标题标题标题标题标题标题标题标题标题标题标题</Text>
                    </View>
                    <View style={styles.img_item}>
                        <Image resizeMethod='cover' style={[styles.img, styles.shadow]}
                               source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494120482&di=9a7d34b2c454a62e3205473dd48f92cb&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F66%2F36%2F02x58PIC6fw_1024.png'} }/>
                        <Text style={styles.text2 }
                              numberOfLines={2}>标题标题标题标题标题标题标题标题标题标题标题标题</Text>
                    </View>
                    <View style={styles.img_item}>
                        <Image resizeMethod='cover' style={[styles.img, styles.shadow]}
                               source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494120514&di=63a7c2629b26f927746e661ed1354984&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F29%2F71%2F92b58PIC3iS_1024.jpg'} }/>
                        <Text style={styles.text2} numberOfLines={2}>标题标题标题标题标题标题标题标题标题标题标题标题</Text>
                    </View>
                </View>
            </View>
        );

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
                                             height: Utils.pixel
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
                                         color: '#818181'
                                     },

                                 });

// B. 提供组件导入方式
module.exports = recommend;