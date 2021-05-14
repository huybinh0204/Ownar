import {Keyboard} from 'react-native';

export const getDateTime = (str) => {
    return str.slice(5, 16);
};
export const setKeyboard = () => {
    return Keyboard.dismiss();
};

