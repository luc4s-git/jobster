import { useRouteError, Link } from 'react-router-dom';
import styled from 'styled-components';
import notFound from '../../assets/images/not-found.svg';

const Wrapper = styled.main`
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default function Error() {
  const error = useRouteError();

  // user is not logged
  const user = null;

  if (error.status === 404) {
    return (
      <Wrapper className="full-page">
        <div>
          <img src={notFound} alt="not found" />
          <h3>Page not found...</h3>
          <p>{"Sorry, we couldn't seem find the page you are looking for."}</p>
          {user ? (
            <Link to="/">back home</Link>
          ) : (
            <Link to="/register">back home</Link>
          )}
        </div>
      </Wrapper>
    );
  }

  return <h1>An error has ocurred...</h1>;
}
