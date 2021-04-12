import React, {Component} from 'react';
import {View, Text, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import R from '../../assets/R';
import {getFont, HEIGHTXD} from '../../config/Functions';
import InputView from '../../components/InputView';
import RadioForm from 'react-native-simple-radio-button';
import {useNavigation} from '@react-navigation/core';
import {LOGINSCREEN, SIGNUPVIEW} from '../../routers/ScreenNames';

const SignUpView = (props) => {
    const navigation = useNavigation();
    const [username, setUsername] = React.useState('owner');
    const [email, setEmail] = React.useState('owner@admin.com');
    const [password, setPassword] = React.useState('123456');

    return (
        <ScrollView style={{flex: 1}}>
            <View style={{flex:2, marginVertical: HEIGHTXD(30),alignItems:'center',marginTop:HEIGHTXD(150)}}>
                <Text style = {{color:R.colors.loginlogo, fontWeight:'bold',fontSize:getFont(46),}}>OnePark</Text>
                <Text style = {{color:R.colors.loginlogo, fontWeight:'bold', fontSize:getFont(28)}}>Đăng Ký</Text>
            </View>
            <View style={{flex: 1, margin: HEIGHTXD(30),marginTop:HEIGHTXD(100)}}>
                <Text style={{color:R.colors.loginlogo,fontWeight:'bold',fontSize:getFont(15), marginVertical:HEIGHTXD(15)}}>Tên</Text>
                <InputView
                    secureTextEntry={false}
                    onChangeText={setUsername}
                    value={username}
                    placeholder="owner"
                />
                <Text style={{color:R.colors.loginlogo,fontWeight:'bold',fontSize:getFont(15), marginVertical:HEIGHTXD(15)}}>Email</Text>
                <InputView
                    secureTextEntry={false}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="owner@admin.com"
                />
                <Text style={{color:R.colors.loginlogo,fontWeight:'bold',fontSize:getFont(15),marginVertical:HEIGHTXD(15)}}>Mật khẩu</Text>
                <InputView
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="123456"
                />
            </View>

            <View style={{flex:1,margin: HEIGHTXD(30)}}>
                <TouchableOpacity style={{height:40, borderRadius:20, backgroundColor:R.colors.back_Color_login, alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:getFont(18),color:R.colors.inputbackgroundColor, fontWeight:'bold'}}>
                        Đăng Ký
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1,marginHorizontal: HEIGHTXD(30),flexDirection:'row', marginTop:HEIGHTXD(20),justifyContent:'center'}}>
                <Text style={{color:R.colors.loginlogo,fontSize:getFont(16)}}> Đã có taì khoản? </Text>
                <TouchableOpacity onPress={() => navigation.push(LOGINSCREEN)}>
                    <Text style={{color:'red',fontSize:getFont(16)}}> Đăng Nhập. </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>

    );
};
export default SignUpView;
