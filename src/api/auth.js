import instance from "./instance";

export const register = (dataUser) => {
    const url = `register`;
    return instance.post(url, dataUser);
}
export const login = (dataUser) => {
    const url = `login`;
    return instance.post(url, dataUser);
}
