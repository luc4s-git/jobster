import { getStats } from '../../features/allJobs/allJobsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { StatCard } from '../../components';

// icons
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';

import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
`;

export default function Stats() {
  const dispatch = useDispatch();
  const { stats } = useSelector((store) => store.allJobs);

  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);

  return (
    <Wrapper>
      <StatCard
        icon={<FaSuitcaseRolling />}
        count={stats?.defaultStats?.pending || 0}
        description="pending applications"
        color={'#e9b949'}
        background={'#fcefc7'}
      />
      <StatCard
        icon={<FaCalendarCheck />}
        count={stats?.defaultStats?.interview || 0}
        description="interviews scheduled"
        color={'#647acb'}
        background={'#e0e8f9'}
      />
      <StatCard
        icon={<FaBug />}
        count={stats?.defaultStats?.declined || 0}
        description="jobs declined"
        color={'#d66a6a'}
        background={'#ffeeee'}
      />
    </Wrapper>
  );
}
