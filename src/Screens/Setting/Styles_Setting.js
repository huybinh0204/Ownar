import {StyleSheet, Dimensions, Platform} from 'react-native';
import {getFont, HEIGHT, HEIGHTXD, WIDTH} from '../../config/Functions';

export default StyleSheet.create({
    view_setting_a: {
        height: '92%',
        alignItems: 'flex-end',
    },
    view_setting_b: {
        height: '97%',
        width: '95%',
        margin: HEIGHT(8),
    },
});
