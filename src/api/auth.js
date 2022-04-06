import instance from "./instance";

export const signup = (dataUser) => {
    const url = `register`;
    return instance.post(url, dataUser);
}
export const signin = (dataUser) => {
    const url = `login`;
    return instance.post(url, dataUser);
}
