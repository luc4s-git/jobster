import { useEffect } from 'react';
import Job from './Job';
import { useSelector, useDispatch } from 'react-redux';

import { getAllJobs } from '../../features/allJobs/allJobsSlice';

import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default function JobsContainer() {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);

  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <Wrapper>
        <h2>Loading. . .</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <button onClick={() => dispatch(getAllJobs())}>test dispatch</button>
    </Wrapper>
  );
}
