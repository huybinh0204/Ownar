import React, {Component} from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import R from '../../assets/R';

const SignUpView = (props) => {

    return (

        <ImageBackground source={R.images.back_login} style={{flex: 1, marginTop: -200}}>
            <ScrollView style = {{flex:1,marginTop: 200}}>
                <Text>
                    SignUpView
                </Text>
            </ScrollView>

        </ImageBackground>


    );
};
export default SignUpView;
