import axios from "./axios";

export function getUsersInfo(type,pagenum,pagesize,quire) {
    return axios({
        url:'/api/v1/users',
        params:{
            type,
            pagenum,
            pagesize,
            quire
        }
    });
}

export function updateStsuts(status,id,quire) {
    return axios({
        url:'/api/v1/status',
        params: {
            status,
            id,
            quire,
        },
    });
}

export function getUpdateClick(use) {
    return axios({
        method:'post',
        url:'/api/v1/star',
        params:{
            use
    }
    });
}