import axios from "./axios";

    export function getIndex() {
        return axios({
          url: "/api/v1/homes",
        });
      }

    export function requestLogin(type) {
        return axios({
            url:'/api/v1/home',
            params: {
                type,
            }
        });
    }