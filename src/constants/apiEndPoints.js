export const BACKEND_URL = 'http://localhost:';

export const RECORDS_URL = {
  url: 'api/records',
  method: 'get'
};

export const GET_LIKES_URL = (recordId) => ({
  url: `api/records/${recordId}/likes`,
  method: 'get'
});

export const UPDATE_LIKES_URL = (recordId) => ({
  url: `api/records/${recordId}/likes`,
  method: 'patch'
});