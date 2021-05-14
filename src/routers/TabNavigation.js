import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import R from '../assets/R';

import HomeScreens from '../Screens/Home/HomeScreens';
import QrCodeScreens from '../Screens/QRCode/QRCodeScreens';
import SettingScreens from '../Screens/Setting/SettingScreens';

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {

    return (
        <Tab.Navigator
            initialRouteName="Screen1"
            tabBarOptions={{activeTintColor: R.colors.color_icon}}>
            <Tab.Screen
                name="Screen1"
                component={HomeScreens}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({color, size}) => (
                        <Icon name="home" size={30} color={color}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Screen2"
                component={QrCodeScreens}
                options={{
                    tabBarLabel: 'QRCode',
                    tabBarIcon: ({color, size}) => (
                        <Icon name="home" size={30} color={color}/>
                    ),
                }}
            />
            {/*<Tab.Screen*/}
            {/*    name="Screen2"*/}
            {/*    component={MyEnglishContainer}*/}
            {/*    options={{*/}
            {/*        tabBarLabel: 'Người dùng',*/}
            {/*        tabBarIcon: ({color, size}) => (*/}
            {/*            <Icon name="user" size={30} color={color} />*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}
            <Tab.Screen
                name="Screen3"
                component={SettingScreens}
                options={{
                    tabBarLabel: 'Cài đặt',
                    tabBarIcon: ({color, size}) => (
                        <Icon name="setting" size={30} color={color}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
