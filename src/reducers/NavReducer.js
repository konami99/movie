import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../components/AppNavigator';

const router = RootNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Main');
const initialNavState = router.getStateForAction(mainNavAction);

const NavReducer = (state = initialNavState, action) => {
  let nextState
  switch(action.type) {
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break
  }
  return nextState || state
};

export default NavReducer;