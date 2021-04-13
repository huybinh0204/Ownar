import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image, TouchableOpacity,
} from 'react-native';
import {getFontXD, WIDTH, HEIGHT, HEIGHTXD} from '../../config/Functions';
import {useNavigation} from '@react-navigation/native';
import R from '../../assets/R';

const Header = (props) => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('owner@admin.com');
    return (
        <View style={styles.container}>
            <TextInput
                // secureTextEntry={props.secureTextEntry}
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder='Tìm kiếm'/>
                <TouchableOpacity style={styles.tou}>
                    <Image
                        source={R.images.homelocation}
                        style={styles.img}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: HEIGHT(35),
        margin: 0,
        borderBottomWidth: 0.4,
        backgroundColor: '#61828f',
        elevation: 2,
        paddingTop: 6,
        justifyContent: 'center',
        flexDirection:'row'
    },
    input: {
        width: '84%',
        paddingHorizontal: HEIGHTXD(25),
        paddingVertical: HEIGHTXD(8),
        height: HEIGHTXD(100),
        opacity: 0.6,
        backgroundColor: R.colors.inputbackgroundColor,
        color: R.colors.inputborder_Color,
        borderWidth: HEIGHTXD(1),
        fontSize: getFontXD(42),
        borderColor: R.colors.inputborder_Color,
        alignItems: 'center',
        borderRadius: HEIGHTXD(30),
        marginLeft:20
    },
    tou:{
        paddingTop: 2,
        height: HEIGHT(35),
        width: '16%',
        alignItems: 'center',
        marginRight:10
    },
    img: {
        height: HEIGHT(25),
        width: '50%',
    },

});

export default Header;
