import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import HeadeSetting from '../../../components/Headers/HeadeSetting';
import {getFont, HEIGHTXD} from '../../../config/Functions';
import R from '../../../assets/R';
import InputView from '../../../components/InputView';

const RePasswordView = (props) => {
    const title = String(props.route.params.param);
    const [password, setPassword] = React.useState('');
    const [repassword, setRePassword] = React.useState('');

    const RePasswordUser = () => {
        Alert.alert('Thanh cong');
    };
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
                    }}> Mật khẩu mới</Text>
                    <InputView
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="******"
                    />
                </View>
                <View style={{height: HEIGHTXD(220)}}>
                    <Text style={{
                        color: R.colors.loginlogo,
                        fontWeight: 'bold',
                        fontSize: getFont(15),
                        marginVertical: HEIGHTXD(15),
                    }}> Xác nhận mật khẩu</Text>
                    <InputView
                        secureTextEntry={true}
                        onChangeText={setRePassword}
                        value={repassword}
                        placeholder="******"
                    />
                </View>
            </View>
            <TouchableOpacity onPress={() => {
                RePasswordUser();
            }} style={{
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
                >Đổi mật khẩu</Text>
            </TouchableOpacity>

        </View>
    );
};

export default RePasswordView;
