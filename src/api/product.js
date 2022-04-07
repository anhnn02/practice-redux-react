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

// export const filter = (order) => {
//     let url = "filter?page=1&limit=8"
//     console.log("order", order);
//     if (order.order != "0") {
//         url = `product/filter?page=${order.page}&limit=8&sort=${order.order}`
//     } else {
//         url = `product/filter?page=${order.page}&limit=8`
//     }
//     return instance.get(url)
// }

export const filterPage = (page) => {
    const url = `filter?page=${page}&limit=8`
    return instance.get(url)
}

export const filterProduct = (page, order) => {
    const url = `filter?page=${page}&limit=8&sort=${order}`
    return instance.get(url)
}