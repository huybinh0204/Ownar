import React, {useEffect} from 'react';
import SettingView from './SettingView';

const datas = [
    {
        name: 'Quản lý bảo vệ',
        icon: 'history',
        right: 0,
        is_from: 1,
        screens: [{
            title: 'Quản lý bảo vệ',
            screen: 'P',
        }],
    },
    {
        name: 'Quản lý bãi xe',
        icon: 'graduation-cap',
        right: 0,
        is_from: 1,
        screens: [{
            title: 'Trình độ Anh ngữ',
            screen: 'DIFICULTYLEVEL',
        }],
    },
    {
        name: 'Thống kê giao dich',
        icon: 'question',
        right: 6,
        is_from: 1,
        screens: [{
            title: 'Câu hỏi thường gặp',
            screen: 'FAQ',
        }],
    },
    {
        name: 'Thư viện ảnh',
        icon: 'comment-alt',
        right: 6,
        is_from: 1,
        screens: [{
            title: 'Điều khoản dịch vu',
            screen: 'SERVICE',
        }],
    },
    {
        name: 'Reviews',
        icon: 'book',
        right: 6,
        is_from: 1,
        screens: [{
            title: 'Chính sách bảo mật',
            screen: 'POLICY',
        }],
    },
    {
        name: 'Hồ sơ',
        icon: 'book',
        right: 6,
        is_from: 1,
        screens: [{
            title: 'Chính sách bảo mật',
            screen: 'POLICY',
        }],
    },
];

const SettingScreens = (props) => {
    const [data_user, setDataUser] = React.useState([]);
    const dcv = 1;
    useEffect(() => {
        const obj =[];
        for (var i = 0; i < datas.length; i++) {
            if (datas[i].is_from == 1 && dcv == 1) {
                const sha = {
                    name: datas[i].name,
                    icon: datas[i].icon,
                    right: datas[i].right,
                    is_from: datas[i].is_from,
                    screens: datas[i].screens,
                };
                obj.push(sha);
            } else if (datas[i].is_from == 2 && dcv == 2) {
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

    }, []);
    return <SettingView datas={data_user}/>;
};


export default SettingScreens;
