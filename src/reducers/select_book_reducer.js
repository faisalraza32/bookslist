import { SELECT_BOOK } from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
    case SELECT_BOOK:
      return action.payload;
    default:
      return state;
  }
}