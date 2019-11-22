import axios from "./axios";

export function getAll(type, page) {
    return axios({
      url: '/home/data',
      params: {
        type,
        page
      }
    });
  }
