/*
 *
 * RegisterPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { makeSelectUsername, makeSelectPassword } from './selectors';

import { updateUsername, updatePassword } from './actions';

import { registerRequest } from '../App/actions';

import MinimalForm from '../../components/MinimalForm/index';

export class RegisterPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="RegisterPage"
          meta={[
            { name: 'description', content: 'Description of RegisterPage' },
          ]}
        />
        <MinimalForm
          onChangeUsername={(event) => this.props.dispatch(updateUsername(event.target.value))}
          onChangePassword={(event) => this.props.dispatch(updatePassword(event.target.value))}
          onSubmit={() => this.props.dispatch(registerRequest({ username: this.props.username, password: this.props.password, }))}
          username={this.props.username}
          password={this.props.password}
          title="Register"
        />
      </div>
    );
  }
}

RegisterPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
