import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
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
                        // tabBarIcon: ({color, size}) => (
                        //     <Icon name="home" size={30} color={color} />
                        // ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigator;
