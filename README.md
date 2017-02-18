# React Boilerplate Auth

React Boilerplate extended swith login/register flow built with React & Redux Saga. [react-boilerplate-auth.herokuapp.com](https://react-boilerplate-auth.herokuapp.com/)

## Authentication

Authentication happens in `app/auth/index.js`, using `fakeRequest.js` and `fakeServer.js`. `fakeRequest` is a fake `XMLHttpRequest` wrapper. `fakeServer` responds to the fake HTTP requests and pretends to be a real server, storing the current users in local storage with the passwords encrypted using `bcrypt`.

## Demo
[react-boilerplate-auth.herokuapp.com](https://react-boilerplate-auth.herokuapp.com/)

Available routes:

* `/home` (only accessible when logged in)
* `/login`
* `/register`

## Quick Start

1. Clone this repo using `git clone git@github.com:andreasasprou/react-boilerplate-auth.git`
2. Run `npm run setup` to install dependencies and clean the git repo.
3. At this point you can `run npm start` to see the example app at `http://localhost:3000`.

Documentation about the extensive features of React Boilerplate and general use of this boilerplate can be found [here](https://github.com/react-boilerplate/react-boilerplate). 

I highly reccommend you read [this](https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/general/introduction.md) before attempting to create a project using this boilerplate.

All global reducers, sagas and actions responsible for authentication are defined under `/App`. Examples of logging in, logging out and registering new users are described in the containers LoginPage, HomePage and RegisterPage respectively.

## Creating Secure Routes

To create a secure route (one which cannot be accessed without logging in),  ensure that when creating a new route in `app/routes.js`, you set the `onEnter` property to `(nextState, replace) => checkAuth(store, nextState, replace)`.

E.g.

```
...
}, {
  path: 'home',
  name: 'homePage',
  onEnter: (nextState, replace) => checkAuth(store, nextState, replace),
  getComponent(location, cb) {
    import
    ('containers/HomePage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
}, {
...
```

## Credits

* [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate)
* [saga-login-flow](https://github.com/sotojuan/saga-login-flow)
