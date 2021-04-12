import React, {useEffect} from 'react';
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
import {CheckBox} from 'react-native-elements';

const CheckBoxView = (props) => {
    const [checked, setchecked] = React.useState(true);
    const [checkeda, setcheckeda] = React.useState(false);
    const [checke, setcheck] = React.useState(1);

    useEffect(() => {
        // ClickBox()
    }, []);
    const clickOwner = () => {
        if (checked == false && checkeda == true) {
            setchecked(true);
            setcheckeda(false);
        }
    };
    const clickOwnera = () => {
        if (checked == true && checkeda == false) {
            setchecked(false);
            setcheckeda(true);
        }
    };
    const clickSecurity = async () => {
        if (checked == true && checkeda == false) {
            setchecked(false);
            setcheckeda(true);
        } else {
            setcheckeda(false);
            setchecked(true);
        }
    };

    return (
        <View style={{flex:1}}>
            <CheckBox
                center
                checkedColor='red'
                title='Click Here'
                // checkedIcon='dot-circle-o'
                // uncheckedIcon='circle-o'
                checked={checked}
                onPress={() => {
                    clickOwner();
                }}
            />

            <CheckBox
                checkedColor='red'
                center
                title='Click'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={checkeda}
                onPress={() => {
                    clickOwnera();
                }}
            />
            <CheckBox
                checkedColor='red'
                center
                title='Click'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={checkeda}
                onPress={() => {
                    clickOwnera();
                }}
            />

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', alignItems: 'center',
    },
    checkbox: {
        // width: 15,
        // height:15,
        // backgroundColor: backgroundColorbox,
        // borderWidth: 1,
        // opacity:0.6,
        // borderColor:borderColorBox,
        // justifyItems:'center',
        // alignItems:'center',
        // borderRadius:20
    },
});


export default CheckBoxView;
