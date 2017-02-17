/*
 *
 * LoginPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import LoginForm from '../../components/LoginForm/';
import { createStructuredSelector } from 'reselect';
import { makeSelectUsername, makeSelectPassword } from './selectors';
import { loginRequest, changeUsername, changePassword } from '../App/actions';

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onChangeUsername(event) {
    this.props.dispatch(changeUsername(event.target.value));
  }

  onChangePassword(event) {
    this.props.dispatch(changePassword(event.target.value));
  }

  onLogin() {
    this.props.dispatch(loginRequest({
      username: this.props.username,
      password: this.props.password,
    }));
  }

  render() {
    return (
      <div>
        <Helmet
          title="LoginPage"
          meta={[
            { name: 'description', content: 'Description of LoginPage' },
          ]}
        />
        <LoginForm
          onChangeUsername={this.onChangeUsername}
          onChangePassword={this.onChangePassword}
          onLogin={this.onLogin}
          username={this.props.username}
          password={this.props.password}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  password: makeSelectPassword(),
});


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
