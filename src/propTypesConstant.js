import PropTypes from 'prop-types';

export const usersPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    position_id: PropTypes.number.isRequired,
    registration_timestamp: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
);

export const userPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  position_id: PropTypes.number.isRequired,
  registration_timestamp: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
});

export const positionsPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
);

export const inputPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
});

export const metaPropTypes = PropTypes.shape({
  active: PropTypes.bool.isRequired,
  asyncValidating: PropTypes.bool.isRequired,
  autofilled: PropTypes.bool.isRequired,
  dirty: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string,
  form: PropTypes.string.isRequired,
  initial: PropTypes.string,
  invalid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitFailed: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  touched: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
  visited: PropTypes.bool.isRequired,
  warning: PropTypes.string,
});
