/**
 * Created by  on 2017/3/24.
 * 闪屏页，也就是启动页.一般的项目都会带闪屏页
 * 1.5秒渐变后跳到主页
 */

'use strict';
import React, {Component,} from 'react';
import PropTypes from 'prop-types'
import {
    StyleSheet,
    View,
    Animated,
    Image,
    Dimensions,
    Text,
    TouchableHighlight
} from 'react-native';
import {styles} from "../utils/Styles";
var WINDOW_WIDTH = Dimensions.get('window').width;


export default class HomeInsideItemView extends Component<{}> {

    static propTypes = {
        //标题
        text: PropTypes.string,
        //图片资源
        source: Image.source,
        //动画执行完毕回调
        // animateEnd: PropTypes.func,
    }
    render() {
        const {text,source} = this.props;
        return (
            <View style={styles.homeItemView}>
                <TouchableHighlight
                underlayColor={this.props.bgColor}
                activeOpacity={0.5}
                onPress={this.props.onPress}
                >
                    <View style={{flex: 1, justifyContent : 'center' , alignItems: 'center'}}>
                <Image style={styles.homeItemImage} source={source}/>
                <Text>{text}</Text>
                    </View>
                </TouchableHighlight>
                {/*<Text>{text}</Text>*/}
            </View>
        );
    }
}