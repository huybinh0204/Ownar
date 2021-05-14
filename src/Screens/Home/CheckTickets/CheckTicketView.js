import React, {Component, useEffect} from 'react';
import {Text, View} from 'react-native';
import HeadeSetting from '../../../components/Headers/HeadeSetting';
import {home_booking} from '../../../api/Functions/login';

const CheckTicketView = (props) => {
    const item = props.route.params.item;
    const [detas, setDatas] = React.useState("");
    const [dataslots, setSlots] = React.useState("");
    const [datavehicle, setVehicle] = React.useState("");
    const [datazone, setZone] = React.useState("");
    useEffect(()=>{getCheckTichetData()},[]);
    const getCheckTichetData=async ()=>{
        const requset = await home_booking(item);
        if (requset.status == 200){
            const databoking = requset.data.data;
            setSlots(databoking.slots)
            setZone(databoking.slots.zone)
            setVehicle(databoking.vehicle)
            setDatas(databoking)
        }else {
            console.log("home_booking errr" );
        }
    }
    return (
        <View style={{flex: 1}}>
            <HeadeSetting header_title={'Chi Tiết Vé Xe'}/>
            <View style={{flex: 1}}>
                <Text>Khu vực: {datazone.name}</Text>
                <Text>Vị trí đỗ: {dataslots.name}</Text>
                <Text>ID No: {detas.order_no}</Text>
                <View>
                    <Text>Đã đặt trước</Text>
                </View>
                <View>
                    <Text>Thời gian vào bãi : {detas.arriving_time}</Text>
                    <Text>Thời gian ra bãi : {detas.leaving_time}</Text>
                    <Text>Giá : {detas.total_amount}</Text>
                </View>
                <View>
                    <Text>Nhãn hiệu:{datavehicle.brand}</Text>
                    <Text>Số xe: {datavehicle.vehicle_no}</Text>
                </View>
                <View>
                    <View>
                        <Text>Check In</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CheckTicketView;
