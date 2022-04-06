import instance from "./instance";

export const list = () => {
    const url = `categoryPros`;
    return instance.get(url);
}
export const read = (id ) => {
    const url = `categoryPros/${id}`;
    return instance.get(url);
}
export const create = (category) => {
    const url = `categoryPros`;
    return instance.post(url, category);
}
export const update = (category) => {
    const url = `categoryPro/${category._id}`;
    return instance.put(url, category);
}
export const remove = (id) => {
    const url = `categoryPro/${id}`;
    return instance.delete(url);
}
export const get = (id) => {
    const url = `categoryPro/${id}`;
    return instance.get(url);
}
export const relatedProduct = (idCate, idPro) => {
    const url = `categoryPros/${idCate}/${idPro}`;
    return instance.get(url);
}
