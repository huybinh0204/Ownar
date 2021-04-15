import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

const QRCodeView = () => {
    const [email, setEmail] = React.useState('');

    return (
        <View style={styles.container}>
            <Text>2</Text>
            <RNCamera
                ref={ref => {
                    console.log(ref);
                }}
                style={{flex:1, width: '100%'}}
            ></RNCamera>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
export default QRCodeView;
