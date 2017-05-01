/**
 * 推荐专题
 */
import React, {Component} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import Utils from "./../utils";

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
                    <View style={styles.img_item} key={i}>
                        <Image resizeMethod='scale' style={styles.img}
                               source={{uri: data[i].img} }/>
                    </View>
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
                    {/*  <View style={styles.img_item}>
                     <Image resizeMethod='scale' style={styles.img}
                     source={{uri: 'https://ai.bdstatic.com/dist/1493288513/ai_images/technology/ocr-idcard/demo-card-1.png'} }/>
                     </View>
                     <View style={styles.img_item}>
                     <Image resizeMethod='scale' style={styles.img}
                     source={{uri: 'http://wiki.mbalib.com/w/images/9/97/%E5%93%81%E7%89%8C%E8%AF%86%E5%88%AB%E7%9A%84%E9%99%B7%E9%98%B1.gif'}}/>
                     </View>*/}
                </View>
                <View>
                    <Text style={styles.text2}>查看更多同期专题&gt;</Text>
                </View>
            </View>
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