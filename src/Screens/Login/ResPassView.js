import React, {Component} from 'react';
import {View, Text, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import R from '../../assets/R';
import {getFont, HEIGHTXD} from '../../config/Functions';
import InputView from '../../components/InputView';
import {useNavigation} from '@react-navigation/core';
import {LOGINSCREEN, SIGNUPVIEW} from '../../routers/ScreenNames';

const ResPassView = (props) => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('owner@admin.com');

    return (
        <ScrollView style={{flex: 1,}}>
            <View style={{flex: 2, marginVertical: HEIGHTXD(30), alignItems: 'center', marginTop: HEIGHTXD(350)}}>
                <Text style={{color: R.colors.loginlogo, fontWeight: 'bold', fontSize: getFont(46)}}>OnePark</Text>
                <Text style={{
                    color: R.colors.loginlogo,
                    fontWeight: 'bold',
                    fontSize: getFont(18),
                    textAlign: 'center',
                    marginTop:HEIGHTXD(30),
                    marginHorizontal:HEIGHTXD(50),
                }}>Nhập email của bạn hệ thống sẻ gửi cho bạn về cách đặt lại </Text>
            </View>
            <View style={{flex: 1, margin: HEIGHTXD(30), marginTop: HEIGHTXD(100)}}>

                <Text style={{
                    color: R.colors.loginlogo,
                    fontWeight: 'bold',
                    fontSize: getFont(15),
                    marginVertical: HEIGHTXD(15),
                }}>Email</Text>
                <InputView
                    secureTextEntry={false}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="owner@admin.com"
                />
            </View>

            <View style={{flex: 1, margin: HEIGHTXD(30)}}>
                <TouchableOpacity style={{
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: R.colors.back_Color_login,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{fontSize: getFont(18), color: R.colors.inputbackgroundColor, fontWeight: 'bold'}}>
                        Gửi
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 1,
                marginHorizontal: HEIGHTXD(30),
                flexDirection: 'row',
                marginTop: HEIGHTXD(20),
                justifyContent: 'center',
            }}>
                <Text style={{color: R.colors.loginlogo, fontSize: getFont(16)}}> Tôi nhớ taì khoản? </Text>
                <TouchableOpacity onPress={() => navigation.push(LOGINSCREEN)}>
                    <Text style={{color: 'red', fontSize: getFont(16)}}> Đăng Nhập. </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>

    );
};
export default ResPassView;
