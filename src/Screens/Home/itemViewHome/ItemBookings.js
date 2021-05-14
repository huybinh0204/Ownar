import React, {Component} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {getFont, HEIGHT} from '../../../config/Functions';
import R from '../../../assets/R';
import {useNavigation} from '@react-navigation/native';
import {CHECKTECKETVIEW} from '../../../routers/ScreenNames';
import {getDateTime} from '../../../config/constants';

const ItemBookings =(props)=> {
    const navigation = useNavigation();
    const item = props.item;
    const getCheckTecket =()=>{
        console.log("item",item);
        navigation.push(CHECKTECKETVIEW,{item:item.id});
    }
    return (
        <TouchableOpacity onPress={(item)=>getCheckTecket()}
            style={{
            marginBottom: 8,
            backgroundColor: '#cac8c8',
            borderRadius: HEIGHT(10),
            flexDirection: 'row',
            alignItems: 'center',
        }} >
            <View style={{
                width: HEIGHT(45),
                height: HEIGHT(45),
                borderRadius: HEIGHT(1000),
                backgroundColor: '#dedcdc',
            }}>
                <Image
                    source={R.images.icon_user}
                    style={{
                        height: HEIGHT(45),
                        width: HEIGHT(45),
                        borderRadius: HEIGHT(50),
                    }}
                    resizeMode={'contain'}
                />
            </View>
            <View style={{padding: 8}}>
                <View style={{flexDirection: 'row', padding: HEIGHT(2), width: '100%'}}>
                    <Text style={{
                        color: R.colors.loginlogo,
                        fontSize: getFont(17),
                        fontWeight: 'bold',
                        width: '68%',
                    }}>{item.user.name} </Text>
                    <Text style={{
                        color: R.colors.loginlogo,
                        fontSize: getFont(17),
                        width: '25%',
                        fontWeight: 'bold',
                    }}> {item.total_amount} đ </Text>
                </View>
                <Text
                    style={{color: R.colors.loginlogo, fontSize: getFont(15)}}>
                    ID NO. {item.order_no}</Text>
                <Text
                    style={{color: R.colors.loginlogo, fontSize: getFont(15)}}>
                    {getDateTime(item.created_at)} đến {getDateTime(item.leaving_time)} </Text>
                <Text
                    style={{color: R.colors.loginlogo, fontSize: getFont(15)}}>
                    {item.vehicle.brand} - {item.vehicle.vehicle_no}
                </Text>
            </View>

        </TouchableOpacity>
    );
};


export default ItemBookings;
