import React, {Component, useEffect} from 'react';
import {Alert, AsyncStorage, Text, TouchableOpacity, View} from 'react-native';
import HeadeSetting from '../../../components/Headers/HeadeSetting';
import {getFont, HEIGHTXD} from '../../../config/Functions';
import R from '../../../assets/R';
import InputView from '../../../components/InputView';
import KEY from '../../../assets/AsynStorage';
import {seting_profile, seting_profile_update} from '../../../api/Functions/setting_function';
import {login_accoun} from '../../../api/Functions/login';
import {TABNAVIGATION} from '../../../routers/ScreenNames';
import {showAlert, typeAlert} from '../../../components/DropdownAlert';
import {setKeyboard} from '../../../config/constants';

const FileView = (props) => {
    const title = String(props.route.params.param);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    useEffect(()=>{getFileSetting()},[])
    const getFileSetting = async () => {
        const reques = await seting_profile();
        const datas = reques.data;
        console.log("reques",datas);
        setName(reques.data.name)
        setEmail(reques.data.email)
        setPhone(reques.data.phone_no)
    };
    // const resetdata =async()=>{
    //     const ads = await AsyncStorage.getItem(KEY.BODY_LOGIN);
    //     var result = ads.slice(1,-1);
    //     const bodylogin = JSON.parse(result);
    //     const requers = await login_accoun(bodylogin);
    //     // console.log("requers_bodylogin",requers);
    //     if (requers.status == 200) {
    //         const token = requers.data.data;
    //         await AsyncStorage.setItem(KEY.TOKEN, JSON.stringify(token));
    //     } else {
    //         console.log("err update")
    //     };
    //
    // }
    const updateFileSetting= async ()=>{
        setKeyboard()
        const dataupdate = {
            name:name,
            email:email,
            phone_no:phone,
        }
        console.log("dataupdate",dataupdate)
        const requet = await seting_profile_update(dataupdate);
        if (requet.status == 200){
            showAlert(typeAlert.SUCCESS, 'Thông báo', 'Cập nhật thành công!');
            // await resetdata()
        }else {
            console.log("requet err file setting")
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
                        placeholder="tên"
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
                        secureTextEntry={false}
                        onChangeText={setPhone}
                        value={phone}
                        placeholder="0987654321"
                    />
                </View>

            </View>
            <TouchableOpacity onPress={() => {
                updateFileSetting();
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
                > Cập nhật</Text>
            </TouchableOpacity>

        </View>
    );
};

export default FileView;
