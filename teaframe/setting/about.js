/**
 * 关于
 */
import React, {Component} from "react";
import {ScrollView, StyleSheet, Text} from "react-native";

class About extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.text}>如果问题,请联系开发者: wlhmyit@126.com</Text>


            </ScrollView>
        );
    }
}

// iOS和Android上都可用
/*Alert.alert(
 '提示',
 '杨正友',
 [
 {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
 {text: '确认', onPress: () => console.log('OK Pressed')},
 ],
 {cancelable: false}
 );*/

const styles = StyleSheet.create({
                                     container: {
                                         flex: 1
                                     },
                                     text: {
                                         fontSize: 16,
                                         fontWeight: '300',
                                         marginBottom: 15,
                                         marginLeft: 10,
                                         marginTop: 3,
                                     }
                                 });

module.exports = About;