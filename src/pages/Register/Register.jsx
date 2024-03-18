import { useState, useEffect } from 'react';
import { Logo } from '../../components';
import styled from 'styled-components';

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
    console.log(e.target);
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

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <Logo className="logo" />
        <h3>Login</h3>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            value={values.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            className="form-input"
            type="text"
            id="email"
            value={values.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            className="form-input"
            type="text"
            id="password"
            value={values.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <button type="button" className="btn btn-hipster btn-block">
          demo app
        </button>
        <p>
          Already a member?
          <button className="member-btn" type="button">
            Login
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
