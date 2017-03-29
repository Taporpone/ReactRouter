import { SET_CONTINENT } from '../actions';

const initState = 'Europa';

const selectedContinentReducer = function (state = initState, action) {
  switch (action.type) {
    case SET_CONTINENT:
      return action.name;
  }
  return state;
};

export default selectedContinentReducer;