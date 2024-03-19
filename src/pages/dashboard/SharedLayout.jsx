import { Outlet } from 'react-router-dom';
import { Navbar, SmallSidebar, BigSidebar } from '../../components';

import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;

export default function SharedLayout() {
  const { user, isSidebarOpen } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return navigate('/landing');
  }, [user, navigate]);

  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        {isSidebarOpen && <BigSidebar />}

        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
