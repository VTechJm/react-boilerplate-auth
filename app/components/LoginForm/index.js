/**
*
* LoginForm
*
*/

import React from 'react';

import styled from 'styled-components';

import MinimalButton from '../MinimalButton/index';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
`;

const TextField = styled.input`
  display: block;
  border: 1px solid #eee;
  margin: 10px 0;
  background: white;
  padding: 5px;
`;

function LoginForm({ onChangeUsername, onChangePassword, onLogin, username, password }) {
  return (
      <Form
        onSubmit={onLogin}
      >
        <h1>Login</h1>
        <TextField
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={onChangeUsername}
          required
        />
        <TextField
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChangePassword}
          required
        />
        <MinimalButton
          type="submit"
          value="Submit"
          onMouseDown={onLogin}
        />
      </Form>
  );
}

LoginForm.propTypes = {
  onChangeUsername: React.PropTypes.func.isRequired,
  onChangePassword: React.PropTypes.func.isRequired,
  onLogin: React.PropTypes.func.isRequired,
  username: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
};

export default LoginForm;
