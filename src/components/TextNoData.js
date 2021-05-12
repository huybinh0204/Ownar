import React, {Component} from 'react';
import {Text, View} from 'react-native';

const TextNoData = (props) => {

    return (
        <View style={{flex: 1, height: 30, borderTopWidth: 1, borderTopColor: '#d7d3d3', alignItems: 'center', marginTop:6}}>
            <Text style={{fontSize: 16, color: '#605c5c',marginTop:6}}>Không có {props.textno} !</Text>
        </View>
    );
};

export default TextNoData;
