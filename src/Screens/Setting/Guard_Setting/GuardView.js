import React, {Component, useEffect} from 'react';
import {Alert, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import HeadeSetting from '../../../components/Headers/HeadeSetting';
import setting_styles from '../Styles_Setting';
import ButtonAdd from '../../../components/ButtonAdd';
import R from '../../../assets/R';
import {getFont, HEIGHT} from '../../../config/Functions';
import {connect} from 'react-redux';
import {hideLoading, showLoading} from '../../../redux/actions/loadingAction';
import {ITEMGUARD, REPASSWORDVIEW} from '../../../routers/ScreenNames';
import {useNavigation} from '@react-navigation/native';
import {seting_guard} from '../../../api/Functions/setting_function';

const GuardView = (props) => {
    const navigation = useNavigation();
    const title = String(props.route.params.param);
    const [dataguard, setDataGuard] = React.useState();
    const AppGuard = () => {
        navigation.push(ITEMGUARD, {param: 'Thêm bảo vệ',reloadData:_reloadData});
    };
    useEffect(() => {
        getDataGuard();
    }, []);
    const getDataGuard = async () => {
        const requers = await seting_guard();
        console.log('requers setting', requers);
        if (requers.status == 200) {
            const data_guard = requers.data.data;
            setDataGuard(data_guard);
        } else {
            console.log('err setting');
        }
    };
    const _reloadData = (data) => {
        getDataGuard();
    }

    return (
        <View>
            <HeadeSetting header_title={title}/>
            <View style={setting_styles.view_setting_a}>
                <View style={setting_styles.view_setting_b}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={dataguard}
                        keyExtractor={(index) => index + ''}
                        renderItem={({item, index}) =>
                            <View style={styles.viewflatlist}>
                                <View style={styles.view_image}>
                                    <Image source={R.images.icon_user} style={styles.image_a}/>
                                </View>
                                <View style={styles.view_b}>
                                    <Text style={styles.text_title} numberOfLines={1}>{item.name}</Text>
                                    <Text style={styles.text_title_a} numberOfLines={2}>{item.email}</Text>
                                    <Text style={styles.text_title_a} numberOfLines={2}>{item.phone_no}</Text>
                                </View>
                            </View>
                        }
                    />
                </View>
                <ButtonAdd onButtomAdd={() => {AppGuard()}}/>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view_styA: {
        // margin: c,
        marginBottom: HEIGHT(50),
        padding: HEIGHT(8),
    },
    viewflatlist: {
        height: HEIGHT(90),
        width: '100%',
        flexDirection: 'row',
        marginVertical: HEIGHT(4),
        // borderBottomWidth: 1,
        paddingVertical: 1,
        borderRadius: 3,
        backgroundColor: '#fff',
        // backgroundColor:'red',
        elevation: 1,

    },
    view_image: {
        width: '22%',
        height: '100%',
        justifyContent: 'center',
        padding: HEIGHT(4),
    },
    view_b: {
        width: '76%',
        marginLeft: HEIGHT(1),
        paddingVertical: HEIGHT(4),
        justifyContent: 'center',
    },
    image_a: {
        width: '100%',
        height: '80%',
        borderRadius: 30,
    },
    text_title: {
        fontWeight: 'bold',
        color: R.colors.loginlogo,
        fontSize: getFont(20),
    },
    text_title_a: {
        // fontWeight: 'bold',
        color: R.colors.loginlogo,
        fontSize: getFont(18),
    },
});

// @ts-ignore
function mapStateToProps(state) {
    return {
        loadingModal: state.ModalLoadingReducer,
    };
}

export default connect(mapStateToProps, {showLoading, hideLoading})(
    GuardView,
);
