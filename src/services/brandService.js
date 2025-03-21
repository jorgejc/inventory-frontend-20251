import { axiosInstance } from '../helper/axios-config';

const getBrands = () => {
    return axiosInstance.get('brand', {
        header: {
            'Content-type': 'application/json'
        }
    });
}

const createBrand = (data) => {
    return axiosInstance.post('brand', data, {
        header: {
            'Content-type': 'application/json'
        }
    });
}

const updateBrand = (brandId, data) => {
    return axiosInstance.put(`brand/${brandId}`, data, {
        header: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getBrands, createBrand, updateBrand
}