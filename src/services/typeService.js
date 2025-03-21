import { axiosInstance } from '../helper/axios-config';

const getTypes = () => {
    return axiosInstance.get('equipment-type', {
        header: {
            'Content-type': 'application/json'
        }
    });
}

const createType = (data) => {
    return axiosInstance.post('equipment-type', data, {
        header: {
            'Content-type': 'application/json'
        }
    });
}

const updateType = (equipmentTypeId, data) => {
    return axiosInstance.put(`equipment-type/${equipmentTypeId}`, data, {
        header: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getTypes, createType, updateType
}