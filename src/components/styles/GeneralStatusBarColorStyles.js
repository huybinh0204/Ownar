import { StyleSheet, Platform, StatusBar } from 'react-native';
import {HEIGHTXD} from '../../config/Functions';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? HEIGHTXD(135) : StatusBar.currentHeight;
export default StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT
    }
});
