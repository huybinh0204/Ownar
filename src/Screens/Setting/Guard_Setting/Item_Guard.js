import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import HeadeSetting from '../../../components/Headers/HeadeSetting';
import {getFont, getFontXD, HEIGHT, HEIGHTXD} from '../../../config/Functions';
import R from '../../../assets/R';
import InputView from '../../../components/InputView';
import {seting_post_guard} from '../../../api/Functions/setting_function';
import {setKeyboard} from '../../../config/constants';
import {showAlert, typeAlert} from '../../../components/DropdownAlert';
import {max, min} from 'moment';
import {useNavigation} from '@react-navigation/native';

const ItemGuard = (props) => {
    const navigation = useNavigation();
    const title = String(props.route.params.param);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const AppGuard = async () => {
        setKeyboard()
        if (name && email && password && phone != '' ){
            const asd = email.indexOf('@');
            const is_phone = phone.indexOf(' ');
            console.log("requers ====== requers" , + asd + " : " + is_phone + "111 :"+ phone.length);
            // cos @
            if (asd != -1 ){
                if (is_phone != -1){
                    showAlert(typeAlert.ERROR, 'Thông báo', 'Bạn nhập sai số điện thoại trưa đúng!');
                }else {
                    if (max(phone.length) <= 13 && min(phone.length) >=9 && password.length >= 6){
                        await DataAppGuard()
                    }else if (max(phone.length) <= 13 && min(phone.length) >=9 && password.length < 6){
                        showAlert(typeAlert.ERROR, 'Thông báo', 'Password phải 6 ký tự trở lên!');
                    }else {
                        showAlert(typeAlert.ERROR, 'Thông báo', 'Bạn nhập sai số điện thoại trưa đúng!');
                    }
                }
            }else {
                showAlert(typeAlert.ERROR, 'Thông báo', 'Bạn nhập sai email!');
            }
        }else {
            showAlert(typeAlert.ERROR, 'Thông báo', 'Bạn nhập chưa đủ thông tin!');
        }
    };
    const DataAppGuard= async ()=>{
        const databody = {
            name: name,
            email: email,
            phone_no: phone,
            password: password
        }
        const requers = await seting_post_guard(databody);
        // console.log("requers=====",databody);
        // console.log("requers=====requers",requers);
        if (requers.status == 200){
            showAlert(typeAlert.SUCCESS, 'Thông báo', 'Thêm bảo vệ thành công!');
            props.route.params.reloadData()
            navigation.goBack();
        }else if (requers.status == 422){
            showAlert(typeAlert.ERROR, 'Thông báo', 'Email đã tồn tại!');
        }
    }
    return (
        <View style={{flex: 1}}>
            <HeadeSetting header_title={title}/>
            <View style={{flex: 1, marginHorizontal: 20}}>
                <View style={{height: HEIGHTXD(220)}}>
                    <Text style={{
                        color: R.colors.loginlogo,
                        fontWeight: 'bold',
                        fontSize: getFont(15),
                        marginVertical: HEIGHTXD(15),
                    }}>Tên</Text>
                    <InputView
                        secureTextEntry={false}
                        onChangeText={setName}
                        value={name}
                        placeholder="tên bảo vệ 1"
                    />
                </View>
                <View style={{height: HEIGHTXD(220)}}>
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
                        placeholder="baove@gmail.coms"
                    />
                </View>
                <View style={{height: HEIGHTXD(220)}}>
                    <Text style={{
                        color: R.colors.loginlogo,
                        fontWeight: 'bold',
                        fontSize: getFont(15),
                        marginVertical: HEIGHTXD(15),
                    }}>Số điện thoại</Text>
                    <InputView
                        keyboardType = {true}
                        secureTextEntry={false}
                        onChangeText={setPhone}
                        value={phone}
                        placeholder="0987654321"
                    />
                </View>
                <View style={{height: HEIGHTXD(220)}}>
                    <Text style={{
                        color: R.colors.loginlogo,
                        fontWeight: 'bold',
                        fontSize: getFont(15),
                        marginVertical: HEIGHTXD(15),
                    }}>Mật khẩu</Text>
                    <InputView
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="123456"
                    />
                </View>
            </View>
            <TouchableOpacity onPress={() => {
                AppGuard();
            }}
                              style={{
                                  width: '100%',
                                  marginTop: 10,
                                  bottom: 0,
                                  height: 50,
                                  backgroundColor: R.colors.color_icon,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  position: 'absolute',
                              }}>
                <Text style={{
                    fontSize: 20,
                    color: R.colors.inputbackgroundColor,
                    marginHorizontal: 10,
                }}
                >Thêm</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({});

export default ItemGuard;
