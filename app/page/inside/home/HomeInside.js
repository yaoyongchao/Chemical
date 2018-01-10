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


export default class HomeInside extends Component<{}> {
    _onPressButton() {
        Alert.alert("wo sho yaoren ！")
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButton}>
                    <Text>Button</Text>
                </TouchableHighlight>
                <Text>花销物流运输平台</Text>
            </View>
        );
    }
}

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