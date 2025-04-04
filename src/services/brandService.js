import { axiosInstance } from '../helper/axios-config';

const getBrands = () => {
    return axiosInstance.get('brand', {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

const createBrand = (data) => {
    return axiosInstance.post('brand', data, {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

const updateBrand = (brandId, data) => {
    return axiosInstance.put(`brand/${brandId}`, data, {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    getBrands, createBrand, updateBrand
}