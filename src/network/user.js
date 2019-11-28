import axios from "./axios";

export function getUsersInfo(type,pagenum,pagesize) {
    return axios({
        url:'/api/v1/users',
        params:{
            type,
            pagenum,
            pagesize
        }
    });
}

export function updateStsuts(status,id) {
    return axios({
        url:'/api/v1/status',
        params: {
            status,
            id
        },
    });
}