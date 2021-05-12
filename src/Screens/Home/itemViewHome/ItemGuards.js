import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {getFont, HEIGHT} from '../../../config/Functions';
import R from '../../../assets/R';

const ItemGuards = (props) => {
    const item = props.item;
    return (
        <TouchableOpacity style={{
            alignItems: 'center',
            width: HEIGHT(80),
            height:HEIGHT(85),
            justifyContent: 'center',
            backgroundColor: '#cac8c8',
            marginRight: HEIGHT(10),
            borderRadius: HEIGHT(10),
            marginTop: HEIGHT(5),
        }}>
            <View style={{
                height: HEIGHT(45),
                width: HEIGHT(45),
                borderRadius: HEIGHT(1000),
                backgroundColor: '#dedcdc',
            }}>
                <Image
                    source={R.images.icon_user}
                    style={{height: HEIGHT(45), width: HEIGHT(45), borderRadius: HEIGHT(1000)}}
                    resizeMode={'contain'}
                />
            </View>
            <View style={{width: '100%',height: HEIGHT(30),}}>
                <Text style={{
                    color: R.colors.loginlogo,
                    fontSize: getFont(15),
                    textAlign: 'center',
                    marginTop:2
                }}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
};


export default ItemGuards;
