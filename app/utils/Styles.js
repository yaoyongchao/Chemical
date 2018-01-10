import {StyleSheet} from "react-native";
import Colors from './Colors'
import ScreenUtils from './ScreenUtil'
import Dimens from './Dimens'


 export const styles = StyleSheet.create({
    bgside: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: Colors.bg_side_left,
    },
    avatarView: {
        // flex:1,
        height:ScreenUtils.height*(2/5),
        // backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
    },
     avatarV:{
         alignSelf:'center',
         width: Dimens.avatarSize,
         height: Dimens.avatarSize,
         borderRadius: Dimens.avatarRadius,
         borderWidth: Dimens.avatarBorder,
         borderColor: '#F00',
         justifyContent: 'center',
         alignItems: 'center',
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
     dividerH: {
         height: Dimens.diviverHeight,
         backgroundColor: Colors.diviver,
         justifyContent: 'center',
         alignItems: 'center',
     },
     sideLeftItem: {
        flexDirection: 'row',
         marginLeft: 30,
         alignItems: 'center',
         marginTop: Dimens.leftItemmargin,
         marginBottom: Dimens.leftItemmargin,
     },
     sideLeftImg: {
        width: Dimens.sideleftImgSize,
         height: Dimens.sideleftImgSize,
         marginRight: 10,
     },
});