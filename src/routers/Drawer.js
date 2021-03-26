import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import R from '../assets/R';

import HomeScreens from '../Screens/Home/HomeScreens';
function Feed({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Feed Screen</Text>
            <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
            <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
        </View>
    );
}

function Notifications() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Notifications Screen</Text>
        </View>
    );
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList
                {...props}
                activeTintColor={R.colors.main}
                itemStyle={{
                    marginTop: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                }}
                activeBackgroundColor={R.colors.white}
                labelStyle={{fontSize: 16, padding: 0}}
            />
        </DrawerContentScrollView>
    );
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Tiếng anh cho học sinh" component={HomeScreens} />
            <Drawer.Screen
                name="Tiếng anh cho doanh nghiệp"
                component={Notifications}
            />
            <Drawer.Screen name="Tiếng anh cho học thuật" component={Notifications} />
            <Drawer.Screen
                name="Tiếng anh cho truyền thống"
                component={Notifications}
            />
            <Drawer.Screen name="Tiếng anh cho du lịch" component={Notifications} />
            <Drawer.Screen name="Tiếng anh cho tổng quát" component={Notifications} />
            <Drawer.Screen
                name="Tiếng anh cho chuyên ngành"
                component={Notifications}
            />

            <Drawer.Screen name="Ngữ pháp" component={Notifications} />
            <Drawer.Screen name="Phát âm" component={Notifications} />
            <Drawer.Screen name="Giao tiếp" component={Notifications} />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <MyDrawer />
        </NavigationContainer>
    );
}
