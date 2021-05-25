import React, {Component, useEffect} from 'react';
import {Alert, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import HeadeSetting from '../../../components/Headers/HeadeSetting';
import setting_styles from '../Styles_Setting';
import ButtonAdd from '../../../components/ButtonAdd';
import R from '../../../assets/R';
import {getFont, HEIGHT} from '../../../config/Functions';
import {connect} from 'react-redux';
import {hideLoading, showLoading} from '../../../redux/actions/loadingAction';
import {APPMAPSPARKING, ITEMGUARD, REPASSWORDVIEW} from '../../../routers/ScreenNames';
import {useNavigation} from '@react-navigation/native';
import {seting_guard} from '../../../api/Functions/setting_function';
import {home_maps} from '../../../api/Functions/login';
import AppMapsParking from './App_Maps_Parking';

const ParkingView = (props) => {
    const navigation = useNavigation();
    const title = String(props.route.params.param);
    const [datamaps, setDataMaps] = React.useState([]);

    useEffect(() => {
        getDataParking();
    }, []);
    const getDataParking = async () => {
        props.showLoading();
        const requers = await home_maps();
        if (requers.status == 200) {
            const data_requers_maps = requers.data.data;
            console.log("item----data_requers_maps",data_requers_maps);
            setDataMaps(data_requers_maps);
        } else {
            console.log('requers maps err');
        }
        props.hideLoading();
    };
    const _reloadData = (data) => {
        getDataParking();
    }
    const AppParking = () => {
        navigation.push(APPMAPSPARKING, {param: 'Thêm bãi xe'});
    };

    return (
        <View>
            <HeadeSetting header_title={title}/>
            <View style={setting_styles.view_setting_a}>
                <View style={setting_styles.view_setting_b}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={datamaps}
                        keyExtractor={(index) => index + ''}
                        renderItem={({item, index}) =>
                            <View style={styles.viewflatlist}>
                                <View style={styles.view_image}>
                                    <Image source={R.images.icon_user} style={styles.image_a}/>
                                </View>
                                <View style={styles.view_b}>
                                    <Text style={styles.text_title} numberOfLines={1}>{item.title}</Text>{item.address == ""?
                                    <Text style={styles.text_title_a} numberOfLines={2}>...</Text>
                                    : <Text style={[styles.text_title_a,{color:'#6d6c6c'}]} numberOfLines={2}>{item.address}</Text>}
                                    <Text style={[styles.text_title_a,{color:'#000'}]} numberOfLines={1}>{item.price_par_hour} đ/giờ</Text>
                                </View>
                            </View>
                        }
                    />
                </View>
                <ButtonAdd onButtomAdd={() => {AppParking()}}/>
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
    ParkingView,
);
