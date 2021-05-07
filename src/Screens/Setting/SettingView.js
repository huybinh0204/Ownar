import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { ITEMGUARD} from '../../routers/ScreenNames';
const SettingView = (props) => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate(ITEMGUARD)}
                style={{width: '100%', height: 40, backgroundColor: 'yellow'}}>
                <Text>ddd</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingView;

