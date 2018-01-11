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
import  Drawer from  'react-native-drawer'
export default class MainInside extends Component<{}> {
    // render() {
    //     const sideLeft = <SideLeft navigator={navigator}/>;
    //     return (
    //        // <View>
    //          //   <StatusBar
    //            //     animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
    //             //    hidden={false}  //是否隐藏状态栏。
    //              //   backgroundColor={'green'} //状态栏的背景色
    //               //  translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
    //                // barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')
    //             //>
    //             //</StatusBar>
    //             //<Text>
    //              //   fsdfd
    //             //</Text>
    //         //</View>
    //         //<SideMenu menu={sideLeft} isOpen={false} openMenuOffset={1/3} hiddenMenuOffset={2/3} autoclosing={true}>
    //         <SideMenu menu={sideLeft} isOpen={false} openMenuOffset={ScreenUtil.width*(3/5)} autoClosing={true}>
    //            <HomeInside />
    //        </SideMenu>
    //     );
    // }

    render () {
        return (
            <Drawer
                open={false}
                type="displace"
                content={<SideLeft />}
                tapToClose={true}
                panOpenMask={0.4}
                openDrawerOffset={0.4} // 20% gap on the right side of drawer
                panCloseMask={0.4}
                closedDrawerOffset={-3}
                styles={drawerStyles}
                tweenHandler={(ratio) => ({
                    main: { opacity:(2-ratio)/2 }
                })}
            >
                <HomeInside />
            </Drawer>
        );
    }
}
const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
}