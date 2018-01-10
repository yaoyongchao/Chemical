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
export default class ChatScreen extends Component<{}> {
    render() {
        return(
            <View>
                <Text>ChatScreen界面 </Text>
            </View>
        );
    }

}
