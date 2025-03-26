import { axiosInstance } from '../helper/axios-config';

const getInventories = () => {
    return axiosInstance.get('inventory', {
        header: {
            'Content-type': 'application/json'
        }
    });
}

const createInventory = (data) => {
    return axiosInstance.post('inventory', data, {
        header: {
            'Content-type': 'application/json'
        }
    });
}

const updateInventory = (inventoryId, data) => {
    return axiosInstance.put(`inventory/${inventoryId}`, data, {
        header: {
            'Content-type': 'application/json'
        }
    });
}

const getInventoryForId = (inventoryId) => {
    return axiosInstance.get(`inventory/${inventoryId}`,  {
        header: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getInventories, createInventory, updateInventory, getInventoryForId
}