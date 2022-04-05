export const isAuthenticate = () => {
    if (!localStorage.getItem('user')) {
        const fakeLocal = {
            token: "fakeToken",
            user: {
                _id: "fakeUser"
            }
        }
        return fakeLocal
    }
    
    return JSON.parse(localStorage.getItem('user'))
}