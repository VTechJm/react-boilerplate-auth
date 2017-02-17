/**
 * LoginPage selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectUsername = () => createSelector(
  [selectGlobal],
  (global) => global.get('username'),
);

const makeSelectPassword = () => createSelector(
  selectGlobal,
  (global) => global.get('password'),
);

export {
  makeSelectUsername,
  makeSelectPassword,
};
