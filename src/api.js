const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

export const getUsers = page => fetch(`${BASE_URL}users?page=${page}&count=6`)
  .then(response => response.json());
