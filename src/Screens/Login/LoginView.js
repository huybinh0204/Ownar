import React, {Component} from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import R from '../../assets/R';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';

const LoginView = (props) => {

    return (

        <ImageBackground source={R.images.back_login} style={{flex: 1, marginTop: -200}}>
            <ScrollView style = {{flex:1,marginTop: 200}}>
                <Text>
                    LoginView qqq
                </Text>
            </ScrollView>

        </ImageBackground>


    );
};

export default LoginView;
