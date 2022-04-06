import instance from "./instance";
import { isAuthenticate } from '../utils/localstorage'

const {user, token} = isAuthenticate();

export const list = () => {
    const url = `products`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `product/${id}/${user._id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const create = (product) => {
    const url = `products/${user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
// export const create = (product) => {
//     const url = `products`;
//     return instance.post(url, product);
// }
export const read = (id) => {
    const url = `product/${id}`;
    return instance.get(url);
}
export const update = (product) => {
    const url = `product/${product._id}/${user._id}`;
    return instance.put(url, product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const search = (keyword) => {
    const url = `search?name=${keyword}`;
    return instance.get(url);
}