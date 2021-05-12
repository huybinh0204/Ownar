import React, {Component, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity, ScrollView, AsyncStorage} from 'react-native';
import Headers from '../../components/Headers/Headers';
import R from '../../assets/R';
import {useNavigation} from '@react-navigation/native';
import {getFont, HEIGHT} from '../../config/Functions';
import {connect} from 'react-redux';
import {hideLoading, showLoading} from '../../redux/actions/loadingAction';
import {home_booking, home_maps, login_accoun} from '../../api/Functions/login';
import KEY from '../../assets/AsynStorage';
import {TABNAVIGATION} from '../../routers/ScreenNames';
import {showAlert, typeAlert} from '../../components/DropdownAlert';
import TextNoData from '../../components/TextNoData';
import ItemGuards from './itemViewHome/ItemGuards';
import ItemBookings from './itemViewHome/ItemBookings';

const HomeView = (props) => {
    const navigation = useNavigation();
    const [datamaps, setDataMaps] = React.useState([]);
    const [id_boking, setIDBoking] = React.useState();
    const [_guards, setGuards] = React.useState('');
    const [_bookings, setBooking] = React.useState('');
    useEffect(() => {
        getDattaMaps();
        getBoking();
    }, [id_boking]);
    const getDattaMaps = async () => {
        props.showLoading();
        const requers = await home_maps();
        if (requers.status == 200) {
            const data_requers_maps = requers.data;
            setDataMaps(data_requers_maps);
            props.hideLoading();
        } else {
            console.log('requers maps err');
        }
    };
    const getBoking = async () => {
        const requers = await home_booking(id_boking);
        console.log('item', requers.data);
        if (requers.status == 200) {
            const data_requers_ = requers.data.data;
            const data_booking = data_requers_.booking;
            const data_guards = data_requers_.space.guards;
            // console.log('data_booking---', data_guards);
            setBooking(data_booking);
            setGuards(data_guards);
        } else {
            console.log('requers maps err');
        }
    };
    const _reloadData = (data) => {
        // console.log('_reloadData', data);
        setIDBoking(data.id);
    };

    return (
        <View style={{flex: 1}}>
            <Headers datamaps={datamaps} _reloadData={_reloadData}/>
            <ScrollView>
                <View style={{flex: 1.2, margin: 10}}>
                    <Text style={{color: R.colors.loginlogo, fontWeight: 'bold', fontSize: getFont(18)}}>Bảo vệ</Text>
                    {_guards.length == 0 ? <TextNoData textno="bảo vệ"/>
                        :
                        <FlatList
                            data={_guards}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            renderItem={({item}) => <ItemGuards item={item}/>}
                            keyExtractor={(index) => index + 'a'}
                        />
                    }
                </View>
                <View style={{flex: 5, borderTopWidth: 5, borderTopColor: '#cad8de'}}>
                    <View style={{margin: 10}}>
                        <Text style={{color: R.colors.loginlogo, fontWeight: 'bold', fontSize: getFont(18)}}> Khách hàng
                            đặt chỗ</Text>
                    </View>
                    <View style={{flex: 1, marginHorizontal: 10}}>
                        {_bookings.length == 0 ? <TextNoData textno="khách hàng đặt chỗ"/>
                            :
                            <FlatList
                                data={_bookings}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({item}) => <ItemBookings item={item} />}
                                keyExtractor={(index) => index + 'a'}
                            />
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

// @ts-ignore
function mapStateToProps(state) {
    return {
        loadingModal: state.ModalLoadingReducer,
    };
}

export default connect(mapStateToProps, {showLoading, hideLoading})(
    HomeView,
);
