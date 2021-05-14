import KEY from '../assets/AsynStorage';
import axios from 'axios';
import {AsyncStorage} from 'react-native';
axios.defaults.timeout = 10000;
export async function GetData(url, data) {
    const is_token = await AsyncStorage.getItem(KEY.TOKEN);
    // console.log("is_token",is_token);
    const json_token = JSON.parse(is_token);
    const token = json_token.token;
    console.log("token---get",token)
    let myRequest = {
        method: 'get',
        url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token,
        },
        body:data,
        timeout: 60 * 1000,
        // withCredentials: true,
    };
    console.log('My request', myRequest);
    return await axios(myRequest)
        .then((response) => response)
        .then((response) => response)
        .catch((error) => {
            console.log(error.request);
            const err = {
                message: 'error',
                status: error.request.status,
            };
            return err;
        });


}
export async function PostLogin(url, json, isAuth = true) {
    let myRequest = {
        method: 'post',
        url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        timeout: 60 * 1000,
        data: json,
    };
    console.log('post data mobile', myRequest);
    return await axios(myRequest)
        .then((response) => response)
        .then((response) => response)
        .catch((error) => {
            console.log(error.request);
            const err = {
                message: 'error',
                status: error.request.status,
            };
            return err;
        });
}

export async function PostDataAuth(url, json, isAuth = true) {
    const is_token = await AsyncStorage.getItem(KEY.TOKEN);
    // console.log("is_token",is_token);
    const json_token = JSON.parse(is_token);
    const token = json_token.token;
    console.log("token---PostDataAuth",token)
    let myRequest = {
        method: 'post',
        url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token,
        },
        timeout: 60 * 1000,
        data: json,
    };
    console.log('post data mobile', myRequest);
    return await axios(myRequest)
        .then((response) => response)
        .then((response) => response)
        .catch((error) => {
            console.log(error.request);
            const err = {
                message: 'error',
                status: error.request.status,
            };
            return err;
        });
}

export async function PutData(url, json, isAuth = true) {

}
