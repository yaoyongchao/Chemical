/**
 * Created by yaoyongchao on 17-12-18.
 * Description:
 */

"use strict";
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Alert,

    AsyncStorage,
    Text,
    View
} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import SplashView from '../../widget/SplashView'
export default class SplashScreen extends Component<{}> {

    render() {
        const { navigate } = this.props.navigation;
        return(
            <SplashView source={require('../../image/bg_guide_three.png')} animateEnd={this._animateEnd}/>
        );
    }

    _animateEnd = ()=>{
        //动画完成的回调
        // Alert.alert("启动完毕,跳转主页面")
        // this.props.navigation.navigate('Chat')
        this.props.navigation.navigate('main')
        // this.navigate('main')
    }


}
