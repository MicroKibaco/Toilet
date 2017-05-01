/**
 * 卫生间组件
 */
import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Mywebview from "./myWebview";

// A. 实现class的继承
// console.log(Utils.size);
// console.log(Utils.pixel);
/*Utils.get('http://123.57.39.116:3000/data/read?type=cookies', function (data) {

    console.log(data);

}, function (err) {

    alert(err);

 });*/
// http://localhost:63342/toilet/html/nearby.html?_ijt=untcjt5036pm9d12udi9d4u24e
class tolietPage extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Mywebview
                    url='http://www.baidu.com'/>
            </View>
        );

    }

}

const styles = StyleSheet.create({

                                     container: {
                                         flex: 1
                                     }

                                 });

// B. 提供组件导入方式
module.exports = tolietPage;