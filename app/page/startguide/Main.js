/**
 * Created by yaoyongchao on 17-12-19.
 * Description:
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

import SideMenu from 'react-native-side-menu'
import HomeInside from '../inside/home/HomeInside'
import SideLeft from '../inside/home/SideLeft'
import ScreenUtil from '../../utils/ScreenUtil'
export default class Main extends Component<{}> {
    render() {
        const sideLeft = <SideLeft navigator={navigator}/>;
        return (
           // <View>
             //   <StatusBar
               //     animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                //    hidden={false}  //是否隐藏状态栏。
                 //   backgroundColor={'green'} //状态栏的背景色
                  //  translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                   // barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')
                //>
                //</StatusBar>
                //<Text>
                 //   fsdfd
                //</Text>
            //</View>
            //<SideMenu menu={sideLeft} isOpen={false} openMenuOffset={1/3} hiddenMenuOffset={2/3} autoclosing={true}>
            <SideMenu menu={sideLeft} isOpen={false} openMenuOffset={ScreenUtil.width*(3/5)}>
               <HomeInside />
           </SideMenu>
        );
    }
}