import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import R from '../assets/R';
import Drawer from './Drawer';
const Tab = createBottomTabNavigator();
const TabNavigator = (props) => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Screen1"
                tabBarOptions={{activeTintColor: R.colors.main}}>
                <Tab.Screen
                    name="Screen1"
                    component={Drawer}
                    options={{
                        tabBarLabel: 'Trang chủ',
                        tabBarIcon: ({color, size}) => (
                            <Icon name="home" size={30} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Screen2"
                    component={Drawer}
                    options={{
                        tabBarLabel: 'QRCode',
                        tabBarIcon: ({color, size}) => (
                            <Icon name="home" size={30} color={color} />
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
                {/*<Tab.Screen*/}
                {/*    name="Screen3"*/}
                {/*    component={SettingContainer}*/}
                {/*    options={{*/}
                {/*        tabBarLabel: 'Cài đặt',*/}
                {/*        tabBarIcon: ({color, size}) => (*/}
                {/*            <Icon name="setting" size={30} color={color} />*/}
                {/*        ),*/}
                {/*    }}*/}
                {/*/>*/}
            </Tab.Navigator>
        </NavigationContainer>


    );
};

export default TabNavigator;
