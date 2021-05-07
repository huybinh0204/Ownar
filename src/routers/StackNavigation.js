import React, {Fragment, useRef, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreens from '../Screens/Home/HomeScreens';
import TabNavigator from './TabNavigation';

import LoginScreens from '../Screens/Login/LoginScreens';
import QrCodeScreens from '../Screens/QRCode/QRCodeScreens';
import SettingScreens from '../Screens/Setting/SettingScreens';

import SignUpView from '../Screens/Login/SignUpView';
import ResPassView from '../Screens/Login/ResPassView';
import ItemGuard from '../Screens/Setting/Item_Setting/Item_Guard';
import * as ScreenName from './ScreenNames';
const Stack = createStackNavigator();
function MyStack(props) {
    return (
        <Stack.Navigator
            headerMode={'none'}
            initialRouteName = {ScreenName.LOGINSCREEN}>
            <Stack.Screen name={ScreenName.LOGINSCREEN} component={LoginScreens} />
            <Stack.Screen name={ScreenName.TABNAVIGATION} component={TabNavigator} />
            <Stack.Screen name={ScreenName.HOMESCREEN} component={HomeScreens} />
            <Stack.Screen name={ScreenName.SIGNUPVIEW} component={SignUpView} />
            <Stack.Screen name={ScreenName.RESPASSVIEW} component={ResPassView} />
            <Stack.Screen name={ScreenName.QRCODEVIEW} component={QrCodeScreens} />
            <Stack.Screen name={ScreenName.SETTINGSCREENS} component={SettingScreens} />
            <Stack.Screen name={ScreenName.ITEMGUARD} component={ItemGuard} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <Fragment>
            <SafeAreaView />
            <NavigationContainer independent={true}>
                <MyStack />
            </NavigationContainer>
        </Fragment>
    );
}
