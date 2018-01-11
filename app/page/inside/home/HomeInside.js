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
    TouchableHighlight,
    Alert,
} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import HomeInsideItemView from '../../../widget/HomeInsideItemView';
import  {styles} from '../../../utils/Styles'
import  String from '../../../utils/String'
export default class HomeInside extends Component<{}> {
    _onPressButton() {
        Alert.alert("wo sho yaoren ！")
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.bgView}>
                <Text>综合调度</Text>
                <View style={{flexDirection: 'row'}}>
                    <HomeInsideItemView onPress={() => {Alert.alert('323')}} source={require('../../../image/ic_msg.png')} text={String.logistics_order}></HomeInsideItemView>
                    <HomeInsideItemView onPress={() => {this.navigate('splash')}} source={require('../../../image/ic_msg.png')} text={String.order_query}></HomeInsideItemView>
                    <HomeInsideItemView onPress={() => {}} source={require('../../../image/ic_msg.png')} text={String.notification}></HomeInsideItemView>
                </View>

                <Text>业务审批</Text>
                <View style={{flexDirection: 'row'}}>
                    <HomeInsideItemView onPress={() => {}} source={require('../../../image/ic_msg.png')} text={String.logistics_task}></HomeInsideItemView>
                    <HomeInsideItemView onPress={() => {}} source={require('../../../image/ic_msg.png')} text={String.in_storage}></HomeInsideItemView>
                    <HomeInsideItemView onPress={() => {}} source={require('../../../image/ic_msg.png')} text={String.out_storage}></HomeInsideItemView>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <HomeInsideItemView onPress={() => {}} source={require('../../../image/ic_msg.png')} text={String.completed_approval}></HomeInsideItemView>
                    <HomeInsideItemView ></HomeInsideItemView>
                    <HomeInsideItemView ></HomeInsideItemView>
                </View>
            </View>
        );
    }
}
