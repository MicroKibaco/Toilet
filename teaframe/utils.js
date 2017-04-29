/**
 * 工具类的封装
 */
import React from "react";
import {Dimensions, PixelRatio} from "react-native";

// Util工具类
// 1)fetch
// 2)获取屏幕的宽高
// 3)获取最小线宽

module.exports = {
    size: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },

    // 10*1 / PixelRatio.get()
    pixel: 1 / PixelRatio.get(),

    // fetch <==> ajax
    get: function (url, successCallback, failCallback) {

        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {

                successCallback(responseJson);

            })
            .catch((error) => {
                failCallback(error);
            });

    }
};