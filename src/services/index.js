import instance from './axios';
import * as constants from './constants';

export const getPhotos = (query) => {
  let url = '/v2/list?';
  if (query) {
    const {page = 0, limit = constants.PAGINATION_DEFAULT_LIMIT} = query;
    if (limit) {
      url = url + `&limit=${limit}`;
    }
    if (page || page === 0) {
      url = url + `&page=${page}`;
    }
  }

  return instance.get(url);
};

export const getImage = (imageId) => {
  return instance.get(`/id/${imageId}/info`);
};

export const checkError = (error) => {
  if (error.response) {
    if (error.response.status === 404) {
      console.error('Not found error (404): ', error);
    } else if (error.response.status === 500) {
      console.error('Server error (500): ', error);
    } else {
      console.error(error.response.data);
    }
  } else {
    console.error(error.message);
  }
};
