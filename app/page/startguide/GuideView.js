/**
 * Created by yaoyongchao on 17-12-15.
 * Description: 引导页
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Button,
    Alert,
    View,
    Dimensions,
    ImageBackground,
    AsyncStorage,
} from 'react-native';

import Swiper from 'react-native-swiper'
import Colors from '../../utils/Colors'
var imgs = [
    require('../../image/bg_guide_one.png'),
    require('../../image/bg_guide_two.png'),
    require('../../image/bg_guide_three.png')
];

const { width, height } = Dimensions.get('window');
const styles = {
    wrapper:{

    },
    text: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold'
    },
    img: {
        width: width,
        height: height,
        justifyContent: 'flex-end',
    },
    view2: {
        width: Dimensions.get('window').width,
        height: 60,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom:90,
    },
    buttonText1: {
        color: 'red',
        backgroundColor: 'green',
        justifyContent: 'space-between',
        flexDirection: 'row'


        // background: require('./image/left.png')

    }
}

export default class GuideView extends Component<{}> {
    // static navigationOptions = {
    //     title:'Welcome',
    //     header:null,
    // }
    render(){
        return (
            <Swiper style={styles.wrapper} showsButtons={false} loop={false} autoplay={true}
                    dotColor={Colors.transparent} activeDotColor={Colors.transparent}
            >
                <ImageBackground source={imgs[0]} style={styles.img}/>
                <ImageBackground source={imgs[1]} style={styles.img}>
                    <View style={styles.view2}>
                        <Button style={styles.buttonText1} title={"启动应用"} onPress={this.doNext}> </Button>

                    </View>
                </ImageBackground>
            </Swiper>
        );
    }

    doNext() {
        Alert.alert('进入主页！')
        AsyncStorage.setItem("user1",'first',(error) => {
                // Alert.alert('保存成功--');
            this.props.navigation.navigate('mainInside');
                if(error == null) {
                    // Alert.alert('保存成功');
                } else {
                    Alert.alert('error' + error)
                }
            })
    }

}