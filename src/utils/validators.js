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

export const minLength2 = (value) => {
  if (value && value.length < 2) {
    return 'Min length is 2 symbols';
  }

  return undefined;
};
