import instance from "./instance";
import { isAuthenticate } from '../utils/localstorage'

const { user, token } = isAuthenticate();

export const list = () => {
    const url = `invoices`;
    return instance.get(url);
}
export const create = (product) => {
    const url = `invoices`;
    return instance.post(url, product);
}
export const read = (id) => {
    const url = `invoices/${id}`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `invoice/${id}`;
    return instance.get(url);
}
export const update = (id, status) => {
    const url = `invoice/${id}`;
    return instance.put(url, status);
}
