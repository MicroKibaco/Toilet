/**
 * 自定义webview组件
 */
import React, {Component} from "react";
import {WebView} from "react-native";

class myWebview extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            url: this.props.url
        };
    }

    render() {

        return (
            <WebView source={{uri: this.state.url}} style={{marginTop: -20}}/>
        );

    }

}

module.exports = myWebview;