import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native';
import {getFontXD, HEIGHT, HEIGHTXD} from '../../config/Functions';
import R from '../../assets/R';
import Block from '../Block';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

const HeadeSetting = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={R.colors.color_icon}/>
            <Block flex={1} margin={[0, 0]} padding={[0, 20]} center row>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name={'angle-left'} size={35} color={R.colors.color_icon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.txtTitle}>{props.header_title}</Text>
                </TouchableOpacity>
            </Block>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: HEIGHT(50),
        margin: 0,
        borderBottomWidth: 0.4,
        borderBottomColor: R.colors.color_icon,
        elevation: 2,
        paddingTop: 6
    },
    img: {
        height: HEIGHT(35),
    },
    txtTitle: {
        fontSize: getFontXD(46),
        marginLeft: 20,
    },
});

export default HeadeSetting;
