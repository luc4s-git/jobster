import { useState } from 'react';

import { Logo, FormInput } from '../../components';
import styled from 'styled-components';

import { Form } from 'react-router-dom';

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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = (e) => {
    if (e.target.id === 'name') {
      return setValues({ ...values, name: e.target.value });
    }

    if (e.target.id === 'email') {
      return setValues({ ...values, email: e.target.value });
    }

    if (e.target.id === 'password') {
      return setValues({ ...values, password: e.target.value });
    }

    console.log(e.target.value);
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
    console.log(values.isMember);
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

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <button type="button" className="btn btn-hipster btn-block">
          demo app
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
