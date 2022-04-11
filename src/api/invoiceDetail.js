import instance from "./instance";
import { isAuthenticate } from '../utils/localstorage'

const { user, token } = isAuthenticate();

export const list = () => {
    const url = `invoiceDetails`;
    return instance.get(url);
}
export const create = (product) => {
    const url = `invoiceDetails`;
    return instance.post(url, product);
}
export const get = (id) => {
    const url = `invoiceDetails/${id}`;
    return instance.get(url);
}
