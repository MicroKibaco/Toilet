/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View} from "react-native";

// 创建一个组件
export default class toilet extends Component {

    // 渲染视图
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            欢迎 to React Native!
        </Text>
        <Text style={styles.instructions}>
            大家好干啥started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
            Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

// 样式类
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('toilet', () => toilet);
