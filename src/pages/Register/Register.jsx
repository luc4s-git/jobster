import { useState } from 'react';

import { Logo, FormInput } from '../../components';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import { Form } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser } from '../../features/user/userSlice';

const Wrapper = styled.section`
  display: grid;
  place-items: center;

  .logo {
    display: block;
    margin: 0px auto 1.38rem;
  }
  h3 {
    text-align: center;
  }
  .form {
    border-top: 5px solid var(--primary-500);
    max-width: 400px;
  }
  .btn {
    margin-top: 1rem;
  }
  p {
    margin: 1rem 0px 0px;
    text-align: center;
  }
  .member-btn {
    background-color: transparent;
    border: none;
    letter-spacing: 1px;
    color: var(--primary-500);
    cursor: pointer;
  }
`;

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

export default function Register() {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      toast.warn('Please fill out all fields.');
      return;
    }

    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }

    dispatch(registerUser({ name, email, password }));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember, name: '' });
  };

  return (
    <Wrapper className="full-page">
      <Form className="form" onSubmit={(e) => onSubmit(e)}>
        <Logo className="logo" />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {/* name field */}

        {!values.isMember && (
          <FormInput
            name="name"
            label="name"
            type="text"
            value={values.name}
            onChange={handleChange}
          />
        )}

        {/* email field */}
        <FormInput
          name="email"
          label="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />

        {/* password field */}
        <FormInput
          name="password"
          label="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'submit'}
        </button>
        <button
          type="button"
          className="btn btn-hipster btn-block"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'demo app'}
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button className="member-btn" type="button" onClick={toggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </Form>
    </Wrapper>
  );
}
