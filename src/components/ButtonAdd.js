import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native';
import {getFontXD, HEIGHT, HEIGHTXD} from '../config/Functions';

const ButtonAdd = (props) => {
    let {onButtomAdd} = props;
    return (
        <TouchableOpacity style={styles.a_touch} onPress={onButtomAdd}>
            <Text style={{fontSize: 30, color: '#fff', paddingHorizontal: 10}}>+</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    a_touch: {
        height: HEIGHT(46),
        width: HEIGHT(46),
        backgroundColor: 'red',
        borderRadius: HEIGHT(30),
        marginTop: HEIGHT(-100),
        marginRight: HEIGHT(30),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: HEIGHT(10),
    },
});

export default ButtonAdd;
