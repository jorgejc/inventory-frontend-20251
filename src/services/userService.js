import { axiosInstance } from '../helper/axios-config';

const getUsers = () => {
    return axiosInstance.get('user', {
        header: {
            'Content-type': 'application/json'
        }
    });
}

const createUser = (data) => {
    return axiosInstance.post('user', data, {
        header: {
            'Content-type': 'application/json'
        }
    });
}

const updateUser = (userId, data) => {
    return axiosInstance.put(`user/${userId}`, data, {
        header: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getUsers, createUser, updateUser
}