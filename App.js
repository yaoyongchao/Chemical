/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
"use strict";
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
    Alert,
Button,
    AsyncStorage,
  Text,
  View
} from 'react-native';
import Storage from 'react-native-storage';



import GuideView from './app/page/startguide/GuideView';
import SplashView from './app/widget/SplashView'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



export default class App extends Component<{}> {

    /*static navigationOptions = {
        title:'Welcome',
        header:null,
    }*/
  render() {

      const { navigate } = this.props.navigation;
      AsyncStorage.getItem('user1',(error,result) => {
          if(error === null) {
              if (result === null) {
                  navigate("guide")
                  // Alert.alert('取值失败----' + error + "**" + isFirst)
              } else {
                  // Alert.alert('取值成功**' + result);
                  navigate('splash')
              }
          } else {
              // Alert.alert('取值失败error' + error)
          }
      });

    return (
        <View>
        </View>
    );
  }




}
