import instance from "./instance";
import { isAuthenticate } from '../utils/localstorage'

const { user, token } = isAuthenticate();

export const list = () => {
    const url = `users`;
    return instance.get(url);
}
export const read = (id) => {
    const url = `users/${id}`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `user/${id}`;
    return instance.get(url);
}
export const update = (user) => {
    const url = `user/${user._id}`;
    return instance.put(url, user);
}
