/**
 * 自定义webview组件
 */
import React, {Component} from "react";
import {StyleSheet, Text, View, WebView} from "react-native";

class myWebview extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            url: this.props.url,
            isError: false,
        };
    }

    render() {

        return (
            <View style={styles.container}>
                {
                    this.state.isError ? <View style={styles.errorInfo}>
                        <Text style={styles.errorText}>
                            网络有问题!请检查网络情况,再刷新!
                        </Text>
                    </View> : <WebView
                        onError={this._showError.bind(this)}
                        startInLoadingState={true}
                        source={{uri: this.state.url}}
                        style={{marginTop: -20}}/>
                }

            </View>
        );

    }

    _showError() {

        this.setState({

                          isError: true

                      });
    }

}

const styles = StyleSheet.create({

                                     container: {
                                         flex: 1
                                     },

                                     errorInfo: {
                                         marginTop: 100,
                                         justifyContent: 'center',
                                         alignItems: 'center',
                                     },

                                     errorText: {

                                         fontSize: 16,
                                         fontWeight: '300',

                                     }

                                 });

module.exports = myWebview;