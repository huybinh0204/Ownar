import React, {Component, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, AsyncStorage} from 'react-native';
import InputView from '../../components/InputView';
import CheckBoxView from '../../components/CheckBoxView';
import {CheckBox} from 'react-native-elements';
import RadioForm from 'react-native-simple-radio-button';
import R from '../../assets/R';
import {getFont, getFontXD, HEIGHTXD} from '../../config/Functions';
import {useNavigation} from '@react-navigation/native';
import {RESPASSVIEW, SIGNUPVIEW, TABNAVIGATION} from '../../routers/ScreenNames';
import {login_accoun} from '../../api/Functions/login';
import KEY from '../../assets/AsynStorage';
import {showAlert, typeAlert} from '../../components/DropdownAlert';
import {showLoading, hideLoading} from '../../redux/actions/loadingAction';
import {connect} from 'react-redux';
import {setNetworkSetting} from '../../config/Setting';

var radio_props = [
    {label: 'Chủ bãi xe.    ', value: 'owner'},
    {label: 'Bảo vệ', value: 'guard'},
];
const LoginView = (props) => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('owner@dcv.vn');
    const [password, setPassword] = React.useState('123456');
    const [tyleLogin, setTypeLogin] = React.useState('owner');

    useEffect(() => {
        setNetworkSetting()
        setTimeout(()=>{checkTokenLogin()},1000);

    }, []);
    const postLogin = async () => {
        const bodylogin = {
            email: email,
            password: password,
            type: tyleLogin,
        };
        console.log("item----bodylogin:",bodylogin);
        console.log("item-----type :",tyleLogin)
        await AsyncStorage.setItem(KEY.TYPE_LOGIN, tyleLogin);
        setNetworkSetting()
        await checkrequet(bodylogin);
    };

    const checkrequet = async (bodylogin) => {
        const requers = await login_accoun(bodylogin);
        if (requers.status == 200) {
            const token = requers.data.data;
            await AsyncStorage.setItem(KEY.TOKEN, JSON.stringify(token));
            navigation.push(TABNAVIGATION);
        } else {
            showAlert(typeAlert.ERROR, 'Thông báo', 'Đăng nhập thất bại!');
        }
    };
    const checkTokenLogin = async () => {
        const is_token = await AsyncStorage.getItem(KEY.TOKEN);
        if (is_token != null) {
            navigation.reset({
                index: 1,
                routes: [{name: TABNAVIGATION}],
            });
        } else {
            console.log('login token err!');
        }
    };
    return (
        <ScrollView style={{flex: 1}}>
            <View style={{flex: 2, marginVertical: HEIGHTXD(30), alignItems: 'center', marginTop: HEIGHTXD(150)}}>
                <Text style={{color: R.colors.loginlogo, fontWeight: 'bold', fontSize: getFont(46)}}>OnePark</Text>
                <Text style={{color: R.colors.loginlogo, fontWeight: 'bold', fontSize: getFont(28)}}>Đăng Nhập</Text>
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
                <Text style={{
                    color: R.colors.loginlogo,
                    fontWeight: 'bold',
                    fontSize: getFont(15),
                    marginVertical: HEIGHTXD(15),
                }}>Password</Text>
                <InputView
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="123456"/>
            </View>

            <View style={{flex: 1, marginHorizontal: HEIGHTXD(30)}}>
                <RadioForm
                    buttonSize={10}
                    buttonColor={'#d2b987'}
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    onPress={(value) => {
                        setTypeLogin(value);
                    }}
                />
            </View>
            <View style={{flex: 1, marginHorizontal: HEIGHTXD(30), alignItems: 'flex-end'}}>
                <TouchableOpacity onPress={() => navigation.push(RESPASSVIEW)}>
                    <Text style={{color: R.colors.loginlogo, fontSize: getFont(15), fontWeight: 'bold'}}>Quên mật
                        khẩu? </Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, margin: HEIGHTXD(30)}}>
                <TouchableOpacity
                    onPress={() => postLogin()}
                    style={{
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: R.colors.back_Color_login,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: getFont(18), color: R.colors.inputbackgroundColor, fontWeight: 'bold'}}>
                        Đăng nhập
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
                <Text style={{color: R.colors.loginlogo, fontSize: getFont(16)}}> Tạo tài khoản mới? </Text>
                <TouchableOpacity onPress={() => navigation.push(SIGNUPVIEW)}>
                    <Text style={{color: 'red', fontSize: getFont(16)}}> Đăng ký. </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({});

// @ts-ignore
function mapStateToProps(state) {
    return {
        loadingModal: state.ModalLoadingReducer,
    };
}

export default connect(mapStateToProps, {showLoading, hideLoading})(
    LoginView,
);
