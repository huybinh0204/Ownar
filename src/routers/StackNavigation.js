import React, {Fragment, useRef, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreens from '../Screens/Home/HomeScreens';
import LoginScreens from '../Screens/Login/LoginScreens';
import * as ScreenName from './ScreenNames';
const Stack = createStackNavigator();

function MyStack(props) {
    return (
        <Stack.Navigator
            headerMode={'none'}
            initialRouteName={ScreenName.LOGINSCREEN}>
            <Stack.Screen name={ScreenName.LOGINSCREEN} component={LoginScreens} />
            <Stack.Screen name={ScreenName.HOMESCREEN} component={HomeScreens} />
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
