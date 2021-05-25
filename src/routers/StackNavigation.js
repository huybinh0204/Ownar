import React, {Fragment, useRef, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './TabNavigation';

import LoginScreens from '../Screens/Login/LoginScreens';
import QrCodeScreens from '../Screens/QRCode/QRCodeScreens';
import SettingScreens from '../Screens/Setting/SettingScreens';

import SignUpView from '../Screens/Login/SignUpView';
import ResPassView from '../Screens/Login/ResPassView';
import ItemGuard from '../Screens/Setting/Guard_Setting/Item_Guard';
import * as ScreenName from './ScreenNames';
import TransactionView from '../Screens/Setting/Transaction_Setting/TransactionView';
import GuardView from '../Screens/Setting/Guard_Setting/GuardView';
import ParkingView from '../Screens/Setting/Parking_Setting/ParkingView';
import ImageView from '../Screens/Setting/Image_Setting/ImageView';
import ReviewsView from '../Screens/Setting/Reviews_Setting/Reviews_View';
import RePasswordView from '../Screens/Setting/RePassword_Setting/RePasswordView';
import FileView from '../Screens/Setting/File_Setting/FileView';
import CheckTicketView from '../Screens/Home/CheckTickets/CheckTicketView';
import AppMapsParking from '../Screens/Setting/Parking_Setting/App_Maps_Parking';
const Stack = createStackNavigator();

function MyStack(props) {
    return (
        <Stack.Navigator
            headerMode={'none'}
            initialRouteName = {ScreenName.LOGINSCREEN}>
            <Stack.Screen name={ScreenName.LOGINSCREEN} component={LoginScreens} />
            <Stack.Screen name={ScreenName.TABNAVIGATION} component={TabNavigator} />

            <Stack.Screen name={ScreenName.SIGNUPVIEW} component={SignUpView} />
            <Stack.Screen name={ScreenName.RESPASSVIEW} component={ResPassView} />
            <Stack.Screen name={ScreenName.QRCODEVIEW} component={QrCodeScreens} />
            <Stack.Screen name={ScreenName.SETTINGSCREENS} component={SettingScreens} />
            <Stack.Screen name={ScreenName.ITEMGUARD} component={ItemGuard} />

            <Stack.Screen name={ScreenName.TRANSACTIONVIEW} component={TransactionView} />
            <Stack.Screen name={ScreenName.GUARDVIEW} component={GuardView} />
            <Stack.Screen name={ScreenName.PARKINGVIEW} component={ParkingView} />
            <Stack.Screen name={ScreenName.IMAGEVIEW} component={ImageView} />
            <Stack.Screen name={ScreenName.REVIEWSVIEW} component={ReviewsView} />
            <Stack.Screen name={ScreenName.REPASSWORDVIEW} component={RePasswordView} />
            <Stack.Screen name={ScreenName.FILESVIEW} component={FileView} />
            <Stack.Screen name={ScreenName.CHECKTECKETVIEW} component={CheckTicketView} />
            <Stack.Screen name={ScreenName.APPMAPSPARKING} component={AppMapsParking} />
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
