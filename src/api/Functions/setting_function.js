import  url  from '../url'
import {GetData, PostDataAuth} from '../helpers';

export const seting_profile_update = async (body) =>
    PostDataAuth(url.PUT_PROFILE_UPDATE, body).then(res =>res).catch(err => console.log(null));
export const seting_post_guard = async (body) =>
    PostDataAuth(url.GET_GUARD, body).then(res =>res).catch(err => console.log(null));
export const seting_profile = async (body) =>
    GetData(`${url.GET_PROFILE}`, {}).then(res =>res).catch(err => console.log(null));
export const seting_guard = async (body) =>
    GetData(`${url.GET_GUARD}`, {}).then(res =>res).catch(err => console.log(null));
export const seting_review = async (body) =>
    GetData(`${url.GET_REVIEW}`, {}).then(res =>res).catch(err => console.log(null));
