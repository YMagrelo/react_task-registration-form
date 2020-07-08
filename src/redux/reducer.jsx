import { getUsers, getPositions, getToken, registration } from '../api';

const GET_USERS = 'GET_USERS';
const IS_LAST_PAGE = 'IS_LAST_PAGE';
const GET_POSITIONS = 'GET_POSITIONS';

const initialState = {
  users: [],
  isLastPage: false,
  positions: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };

    case IS_LAST_PAGE:
      return {
        ...state,
        isLastPage: action.payload,
      };

    case GET_POSITIONS:
      return {
        ...state,
        positions: [...action.payload],
      };

    default:
      return state;
  }
};

const setUsers = payload => ({
  type: GET_USERS,
  payload,
});

const setIsLastPage = payload => ({
  type: IS_LAST_PAGE,
  payload,
});

const setPositions = payload => ({
  type: GET_POSITIONS,
  payload,
});

export const getUsersThunk = page => async(dispatch) => {
  const data = await getUsers(page);

  if (data.success) {
    dispatch(setUsers(data.users));
  } else {
    alert(data.message);
  }

  if (!data.links.next_url) {
    dispatch(setIsLastPage(true));
  }
};

export const getPositionsThunk = () => async(dispatch) => {
  const data = await getPositions();

  if (data.success) {
    dispatch(setPositions(data.positions));
  } else {
    alert(data.message);
  }
};

export const registrationThunk = (
  name, email, phone, positionId,
) => async(dispatch) => {
  const formData = new FormData();
  const fileField = document.querySelector('input[type="file"]');

  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('position_id', positionId);
  formData.append('photo', fileField.files[0]);
  const data = await getToken();
  const { token } = data;

  const response = await registration(formData, token);

  console.log(response);
};
