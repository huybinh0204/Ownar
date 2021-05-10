import React, {Component} from 'react';
import {View, Text} from 'react-native'
import HeadeSetting from '../../../components/Headers/HeadeSetting';
const ParkingView =(props)=> {
    const title = String(props.route.params.param);

    return (
        <View>
            <HeadeSetting header_title={title}/>
            <Text>ParkingView</Text>

        </View>
    );
}

export default ParkingView;
