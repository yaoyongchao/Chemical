/**
 * Created by yaoyongchao on 17-12-19.
 * Description:
 */
'use strict';
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TouchableHighlight
} from 'react-native';
import Styles, {styles} from '../../../utils/Styles'
import String from '../../../utils/String'
import Colors from '../../../utils/Colors'
export default class SideLeft extends Component<{}> {
    onPressMsg () {
        Alert.alert("wo shi msg")
    }
    onPressSetting () {
        Alert.alert("wo shi Setting")
    }
    render() {
        return (
            <View style={styles.bgside}>
                <View style={styles.avatarView}>
                    <View style={styles.avatarV}>
                        <Image source={require('../../../image/ic_avatar.png')}  />
                    </View>
                </View>

                <View style={styles.dividerH} />

                <TouchableHighlight onPress={this.onPressMsg} underlayColor={Colors.sideLeftItemPressColor} >
                <View style={styles.sideLeftItem} >
                    <Image style={styles.sideLeftImg} source={require('../../../image/ic_msg.png')} />
                    <Text >{String.myMessage}</Text>
                </View>
                </TouchableHighlight>

                <View style={styles.dividerH} />

                <TouchableHighlight onPress={this.onPressSetting} underlayColor={Colors.sideLeftItemPressColor} >
                <View style={styles.sideLeftItem} >
                    <Image style={styles.sideLeftImg} source={require('../../../image/ic_setting.png')} />
                    <Text >{String.setting}</Text>
                </View>
                </TouchableHighlight>
                <View style={styles.dividerH} />

                <Text style={{display: 'none'}}>我是好人</Text>
            </View>
        );
    }
}