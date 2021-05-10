import React, {Component, useEffect,useRef} from 'react';
import {Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeadeSetting from '../../../components/Headers/HeadeSetting';
import {getFont, HEIGHT} from '../../../config/Functions';
import R from '../../../assets/R';
import {connect} from 'react-redux';
import {hideLoading, showLoading} from '../../../redux/actions/loadingAction';
import ButtonAdd from '../../../components/ButtonAdd';
import setting_styles from '../Styles_Setting';
import {showAlert, typeAlert} from '../../../components/DropdownAlert';
const ImageView = (props) => {
    const title = String(props.route.params.param);
    let dropDownAlertRef = useRef(null)
    const GetonPress = async () => {
        Alert.alert("1111")
    }
    const GetDelete = async() => {
        // showAlert(typeAlert.ERROR, 'Thoong bao', 'Thanh cong');
    }


    return (
        <View style={styles.container}>

            <HeadeSetting header_title={title}/>
            <View style={setting_styles.view_setting_a}>
                <View style={setting_styles.view_setting_b}>
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7,8,9,10,11]}
                        keyExtractor={(index) => index + ''}
                        numColumns={2}
                        renderItem={({item, index}) =>
                            <TouchableOpacity
                                onPress={()=>{GetDelete()}}
                                style={styles.viewflatlist}>
                                <Text>
                                    as222
                                </Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
                <ButtonAdd onButtomAdd ={()=>{GetonPress()}} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewflatlist: {
        height: HEIGHT(120),
        width: '48%',
        margin:4,
        flexDirection: 'row',
        marginVertical: HEIGHT(4),
        // borderBottomWidth: 1,
        paddingVertical: 1,
        borderRadius: 3,
        // backgroundColor:'red',
        elevation: 1,

    },
});

// @ts-ignore
function mapStateToProps(state) {
    return {
        loadingModal: state.ModalLoadingReducer,
    };
}

export default connect(mapStateToProps, {showLoading, hideLoading})(
    ImageView,
);
