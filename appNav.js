/**
 * Created by yaoyongchao on 17-12-18.
 * Description:
 */

import {StackNavigator,} from 'react-navigation';
import App from './App';
import SplashScreen from './app/page/startguide/SplashScreen'
import GuideView from './app/page/startguide/GuideView'
import Main from './app/page/startguide/Main'
import MainInside from './app/page/startguide/MainInside'
import ChatScreen from './app/page/ChatScreen'
import HomeInside from './app/page/inside/home/HomeInside'
import String from './app/utils/String'
import Colors from './app/utils/Colors'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,

} from 'react-native';

export default appNav = StackNavigator({
        app: {
            screen: MainInside,
            // header: null,

            navigationOptions: {
                headerTitle: '花销物流运输平台',
                headerBackTitle: 'fanh',
                headerTintColor: '#f00',
                // headerLeft: '返回',
                headerBackTitleStyle: '返回',
                headerStyle: {
                    backgroundColor: '#ccccff',
                },
                // headerBackTitle:null,
                left:null,
                headerLeft: null,
                headerTitleStyle: {
                    color: 'green',
                    textColor: 'red',//title颜色
                    textAlign: 'center',//title居中
                    alignSelf: 'center'
                },
            }
        },
        Chat: {screen: ChatScreen},
        homeInside: {screen: HomeInside,
            navigationOptions: {
                headerTitle: '花销物流运输平台',
            }
        },
        splash: {
            screen: SplashScreen,
            navigationOptions: {
                header: null
            },
        },
        guide: {
            screen: GuideView,
            navigationOptions: {
                header: null
            },
        },
        main: {
            screen: App,
            navigationOptions: {
                headerTitle: '我是傲人',
                headerTintColor: '#f00',
                headerStyle: {
                    backgroundColor: '#f00',
                },
                // headerBackTitle:null,
                // left:null,
                headerLeft: null,
                headerTitleStyle: {
                    color: 'green',
                    textColor: 'red',//title颜色
                    textAlign: 'center',//title居中
                    alignSelf: 'center'
                },
            }
            // mytab: { screen: Tab },
        },

    mainInside: {
        screen: Main,
        header: null
    },
    }

);

