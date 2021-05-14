import {AsyncStorage} from 'react-native';
import KEY from '../assets/AsynStorage';

export const OneSignalKey = {
};
export const NetworkSetting = [];
export const setNetworkSetting = async()=> {
    const on = await AsyncStorage.getItem(KEY.TYPE_LOGIN);
    const token = await AsyncStorage.getItem(KEY.TOKEN);
    const ad = "http://oneparking.dcv.vn/api/" +on;
    const as = {ROOT:ad};
    if (token != null){
        console.log("err seting ----",NetworkSetting);
        NetworkSetting.push(as)
    }else {
        console.log("22222",NetworkSetting)
        NetworkSetting.pop();
        NetworkSetting.push(as)
    }

};
export const StringSetting = {
    SUB_APPNAME: 'OWNA',
    MAIN_APPNAME: 'PM-OWNAR',
    VERSION_ANDROID: '0.0.1',
    VERSION_IOS: '0.0.1',
};
