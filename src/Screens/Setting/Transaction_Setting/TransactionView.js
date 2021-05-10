import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HeadeSetting from '../../../components/Headers/HeadeSetting';

const TransactionView = (props) => {
    const title = String(props.route.params.param);

    return (
        <View>
            <HeadeSetting header_title={title}/>
            <Text>
                TransactionView
            </Text>

        </View>
    );
};

export default TransactionView;
