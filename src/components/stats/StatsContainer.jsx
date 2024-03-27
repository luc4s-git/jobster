import { getStats } from '../../features/allJobs/allJobsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loading } from '../../components';

import { StatCard } from '../../components';

// icons
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';

import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  @media (min-width: 1120px;) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
`;

export default function Stats() {
  const dispatch = useDispatch();
  const { stats, isLoading } = useSelector((store) => store.allJobs);

  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);

  if (isLoading) {
    return <Loading center />;
  }

  const defaultStats = [
    {
      description: 'pending applications',
      count: stats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      iconBackGroundColor: '#fcefc7',
    },
    {
      description: 'interviews scheduled',
      count: stats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      iconBackGroundColor: '#e0e8f9',
    },
    {
      description: 'jobs declined',
      count: stats?.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      iconBackGroundColor: '#ffeeee',
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatCard key={index} {...item} />;
      })}
    </Wrapper>
  );
}
