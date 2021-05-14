import React, {useEffect} from 'react';
import SettingView from './SettingView';
import {AsyncStorage} from 'react-native';
import KEY from '../../assets/AsynStorage';

const datas = [
    {
        name: 'Quản lý bảo vệ',
        icon: 'history',
        right: 0,
        is_from: 1,
        screens: 'GUARDVIEW',
    },
    {
        name: 'Quản lý bãi xe',
        icon: 'graduation-cap',
        right: 0,
        is_from: 1,
        screens: 'PARKINGVIEW',
    },
    {
        name: 'Thống kê giao dich',
        icon: 'question',
        right: 6,
        is_from: 1,
        screens: 'TRANSACTIONVIEW',
    },
    {
        name: 'Thư viện ảnh',
        icon: 'comment-alt',
        right: 6,
        is_from: 1,
        screens: 'IMAGEVIEW',
    },
    {
        name: 'Reviews',
        icon: 'book',
        right: 6,
        is_from: 1,
        screens: 'REVIEWSVIEW',
    },
    {
        name: 'Hồ sơ',
        icon: 'book',
        right: 6,
        is_from: 2,
        screens: 'FILESVIEW',
    },
];

const SettingScreens = (props) => {
    const [data_user, setDataUser] = React.useState([]);
    const setflatfomr = async ()=>{
        const dcv = await AsyncStorage.getItem(KEY.TYPE_LOGIN);
        const on = String(dcv);
        const obj =[];
        for (var i = 0; i < datas.length; i++) {
            if (datas[i].is_from == 1 && on == "owner") {
                const sha = {
                    name: datas[i].name,
                    icon: datas[i].icon,
                    right: datas[i].right,
                    is_from: datas[i].is_from,
                    screens: datas[i].screens,
                };
                obj.push(sha);
            } else if (datas[i].is_from == 2 && on == "owner") {
                const sha = {
                    name: datas[i].name,
                    icon: datas[i].icon,
                    right: datas[i].right,
                    is_from: datas[i].is_from,
                    screens: datas[i].screens,
                };
                obj.push(sha);
            } else if (datas[i].is_from == 2 && on == "guard") {
                const sha = {
                    name: datas[i].name,
                    icon: datas[i].icon,
                    right: datas[i].right,
                    is_from: datas[i].is_from,
                    screens: datas[i].screens,
                };
                obj.push(sha);
            }
        }
        setDataUser(obj)

    }
    useEffect(() => {
        setflatfomr()

    }, []);
    return <SettingView datas={data_user}/>;
};


export default SettingScreens;
