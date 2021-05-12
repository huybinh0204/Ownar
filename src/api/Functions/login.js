import  url  from '../url'
import {GetData, PostLogin} from '../helpers';

export const login_accoun = async (body) =>
    PostLogin(url.LOGINS, body).then(res =>res).catch(err => console.log(null));
export const home_maps = async (body) =>
    GetData(url.GET_SPACE, {}).then(res =>res).catch(err => console.log(null));
export const home_booking = id =>
    GetData(`${url.GET_SPACE}/${id}`, {}).then(res =>res).catch(err => console.log(null));
