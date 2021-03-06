const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

export const getUsers = page => fetch(`${BASE_URL}users?page=${page}&count=6`)
  .then(response => response.json());

export const getPositions = () => fetch(`${BASE_URL}positions`)
  .then(response => response.json());

export const getToken = () => fetch(`${BASE_URL}token`)
  .then(response => response.json());

export const registration = (formData, token) => fetch(`${BASE_URL}users`, {
  method: 'POST',
  body: formData,
  headers: {
    Token: token,
  },
})
  .then(response => response.json());
