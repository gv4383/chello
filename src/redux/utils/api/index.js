import axios from 'axios';

import { baseUrl } from './config';

const API = {
  get: endpoint =>
    axios(`${baseUrl}${endpoint}`, {
      method: 'GET',
    })
      .then(res => res.data)
      .catch(err => err),
  post: (endpoint, payload) =>
    axios(`${baseUrl}${endpoint}`, {
      method: 'POST',
      headers: null,
      data: JSON.stringify(payload),
    })
      .then(res => res)
      .catch(err => err),
  put: (endpoint, payload) =>
    axios(`${baseUrl}${endpoint}`, {
      method: 'POST',
      headers: null,
      data: JSON.stringify(payload),
    })
      .then(res => res)
      .catch(err => err),
  delete: endpoint =>
    axios(`${baseUrl}${endpoint}`, {
      method: 'DELETE',
    })
      .then(res => res)
      .catch(err => err),
};

export default API;
