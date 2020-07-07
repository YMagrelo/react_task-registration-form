export const required = (value) => {
  if (value) {
    return undefined;
  }

  return 'Field is required';
};

export const maxLength60 = (value) => {
  if (value && value.length > 60) {
    return 'Max length is 60 symbols';
  }

  return undefined;
};

export const maxLength100 = (value) => {
  if (value && value.length > 100) {
    return 'Max length is 60 symbols';
  }

  return undefined;
};

export const minLength2 = (value) => {
  if (value && value.length < 2) {
    return 'Min length is 2 symbols';
  }

  return undefined;
};

// eslint-disable-next-line max-len
export const email = value => (value && !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value)
  ? 'Invalid email address'
  : undefined);

// eslint-disable-next-line max-len
export const phoneNumber = value => (value && !/^[\+]{0,1}380([0-9]{9})$/i.test(value)
  ? 'Number should start with code of Ukraine +380'
  : undefined);
