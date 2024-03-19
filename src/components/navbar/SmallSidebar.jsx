import { useSelector, useDispatch } from 'react-redux';
import { toggleSideBar } from '../../features/user/userSlice';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import Logo from '../header/Logo';
import links from '../../utils/links';

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: var(--white);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-500);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--grey-900);
  }
  .nav-link:hover .icon {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    color: var(--grey-900);
  }
  .active .icon {
    color: var(--primary-500);
  }
`;

export default function SmallSidebar() {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className={`sidebar-container ${isSidebarOpen && 'show-sidebar'}`}>
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={() => dispatch(toggleSideBar())}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((item) => {
              return (
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? 'nav-link active' : 'nav-link';
                  }}
                  key={item.id}
                  to={item.path}
                  onClick={() => dispatch(toggleSideBar())}
                >
                  <span className="icon">{item.icon}</span>
                  {item.text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
