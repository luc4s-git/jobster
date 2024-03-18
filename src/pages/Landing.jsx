import logo from '../assets/images/logo.svg';
import image from '../assets/images/undraw_team_page_re_cffb.svg';
import styled from 'styled-components';

const Wrapper = styled.main`
  nav {
    width: 90vw;
    max-width: 1120px;
    margin: 0 auto;
    height: 6rem;
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - 6rem);
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .img-container {
    display: none;
  }
  .img-container .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 3rem;
      .img-container {
        display: block;
        margin-top: -10rem;
      }
      .img-container .main-img {
        display: block;
      }
    }
  }
`;

export default function Landing() {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            eligendi placeat rem rerum? Minus qui vero eum. Architecto eaque
            possimus quam nemo quod obcaecati, magni itaque dignissimos
            reiciendis fuga voluptate?
          </p>
          <button className="btn btn-hero">login/register</button>
        </div>
        <div className="img-container">
          <img
            src={image}
            alt="image of an successful job interview"
            className="img main-img"
          />
        </div>
      </div>
    </Wrapper>
  );
}
