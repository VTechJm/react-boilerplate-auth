/**
*
* MinimalForm
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

function MinimalForm({ onChangeUsername, onChangePassword, onSubmit, username, password, title }) {
  return (
    <Form
      onSubmit={onSubmit}
    >
      <h1>{title}</h1>
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
        onMouseDown={onSubmit}
      />
    </Form>
  );
}

MinimalForm.propTypes = {
  onChangeUsername: React.PropTypes.func.isRequired,
  onChangePassword: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  username: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
};

export default MinimalForm;
