import React, {Component,useEffect} from 'react';
import {Alert, AsyncStorage, FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import R from '../../assets/R';
import {LOGINSCREEN, REPASSWORDVIEW} from '../../routers/ScreenNames';
const SettingView = (props) => {
    const navigation = useNavigation();
    const {datas} = props;

    const LogOut = async ()=>{
        AsyncStorage.clear();
        navigation.reset({
            index: 1,
            routes: [{name: LOGINSCREEN}],
        });
    }
    const getView=(item, index)=>{
       const title = item.name
        return(
            <TouchableOpacity
                onPress={() => navigation.push(item.screens,{param:title})}
                style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    justifyContent: 'space-between',
                    borderBottomColor: '#ddd6d6',
                    borderBottomWidth: 1.2,
                    flexDirection: 'row',
                }}>
                <View style={{flexDirection: 'row', height: 23}}>
                    <Icon
                        name={item.icon}
                        size={22}
                        color={R.colors.color_icon}
                        style={{marginRight: item.right}}></Icon>
                    <Text
                        style={{
                            fontSize: 13,
                            color: '#000',
                            marginLeft: 15,
                            marginTop: 2,
                        }}>
                        {title}
                    </Text>
                </View>
                {/*<Icon*/}
                {/*    name="chevron-right"*/}
                {/*    size={22}*/}
                {/*    style={{marginRight: 8}}*/}
                {/*    color={R.colors.main}></Icon>*/}
            </TouchableOpacity>

        );
    }
    return (
        <View style={{flex: 1}}>
            <View style={{backgroundColor: 'white', marginTop: 25}}>
                <FlatList
                    data={datas}
                    keyExtractor={(index) => index + ''}
                    renderItem={({item, index}) => getView(item, index)}
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.push(REPASSWORDVIEW,{param:"Đổi mật khẩu"})}
                style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    justifyContent: 'space-between',
                    borderBottomColor: '#ddd6d6',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    marginTop: 50,
                }}>
                <View style={{flexDirection: 'row', height: 23}}>
                    <Icon name="sync-alt" size={20} color={R.colors.color_icon}></Icon>
                    <Text
                        style={{fontSize: 13, color: '#000', marginLeft: 19, marginTop: 4}}>
                        Đổi mật khẩu
                    </Text>
                </View>
                {/*<Icon*/}
                {/*    name="chevron-right"*/}
                {/*    size={20}*/}
                {/*    style={{marginRight: 8}}*/}
                {/*    color={R.colors.main}></Icon>*/}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    Alert.alert(
                        'Thông báo',
                        'Bạn muốn đăng xuất không?',
                        [
                            {
                                text: 'Huỷ',
                            },
                            {text: 'Đồng ý', onPress: () => LogOut()},
                        ],
                        {cancelable: false},
                    );
                }}
                style={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    justifyContent: 'space-between',
                    borderBottomColor: '#ddd6d6',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    // marginTop: 50,
                }}>
                <View style={{flexDirection: 'row', height: 23}}>
                    <Icon name="sign-out-alt" size={25} color={R.colors.color_icon}></Icon>
                    <Text
                        style={{fontSize: 13, color: '#000', marginLeft: 19, marginTop: 4}}>
                        Đăng xuất
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
};

export default SettingView;

