import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import R from '../assets/R';
import {getFontXD, HEIGHTXD} from '../config/Functions';
const InputFilter = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                secureTextEntry={props.secureTextEntry}
                style={styles.input}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.placeholder}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        elevation:HEIGHTXD(5),
        marginVertical:HEIGHTXD(15),
        // backgroundColor:'red',
        // margin:HEIGHTXD(8),
        borderRadius:HEIGHTXD(30),
    },
    input: {
        width:'100%',
        paddingHorizontal:HEIGHTXD(25),
        paddingVertical:HEIGHTXD(8),
        height: HEIGHTXD(100),
        opacity:0.6,
        backgroundColor:R.colors.inputbackgroundColor,
        color:R.colors.inputborder_Color,
        borderWidth: HEIGHTXD(1),
        fontSize:getFontXD(42),
        borderColor:R.colors.inputborder_Color,
        alignItems:'center',
        borderRadius:HEIGHTXD(30),
    },
});



export default InputFilter;
