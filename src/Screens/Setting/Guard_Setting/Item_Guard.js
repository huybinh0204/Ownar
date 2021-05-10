import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import HeadeSetting from '../../../components/Headers/HeadeSetting';
import {getFont, getFontXD, HEIGHT, HEIGHTXD} from '../../../config/Functions';
import R from '../../../assets/R';
import InputView from '../../../components/InputView';

const ItemGuard = (props) => {
    const title = String(props.route.params.param);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const AppGuard=()=>{
        Alert.alert("Thanh cong")
    }
    return (
        <View style={{flex: 1}}>
            <HeadeSetting header_title={title}/>
            <View style={{flex:1, marginHorizontal:20}}>
                <View style={{height:HEIGHTXD(220)}}>
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
                <View style={{height:HEIGHTXD(220)}}>
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
                <View style={{height:HEIGHTXD(220)}}>
                    <Text style={{
                        color: R.colors.loginlogo,
                        fontWeight: 'bold',
                        fontSize: getFont(15),
                        marginVertical: HEIGHTXD(15),
                    }}>Số điện thoại</Text>
                    <InputView
                        secureTextEntry={false}
                        onChangeText={setPhone}
                        value={phone}
                        placeholder="0987654321"
                    />
                </View>
                <View style={{height:HEIGHTXD(220)}}>
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
            <TouchableOpacity onPress={()=>{AppGuard()}}
                style={{
                    width: '100%',
                    marginTop: 10,
                    bottom: 0,
                    height: 50,
                    backgroundColor:R.colors.color_icon,
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
