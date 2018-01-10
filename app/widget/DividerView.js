import React, { Component } from 'react';
import {Dimensions, Image} from "react-native";
var WINDOW_WIDTH = Dimensions.get('window').width;
import {
    View,
} from 'react-native';


export default class DividerView extends Component {
    // static propTypes = {
    //     //图片资源
    //     backgroundColor: View.backgroundColor,
    // }

    render() {
        // const {backgroundColor} = this.props;
        return (
            <View style={{flex:1,width:WINDOW_WIDTH,height:1,backgroundColor:'#f00'}}>
            </View>
        );
    }
}