import { createSelector } from 'reselect';

/**
 * Direct selector to the registerPage state domain
 */

const selectRegsiterPage = (state) => state.get('registerPage');

const makeSelectUsername = () => createSelector(
  selectRegsiterPage,
  (registerPage) => registerPage.get('username'),
);

const makeSelectPassword = () => createSelector(
  selectRegsiterPage,
  (registerPage) => registerPage.get('password'),
);

export {
  makeSelectUsername,
  makeSelectPassword,
};
