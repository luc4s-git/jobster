import { useEffect } from 'react';
import Job from './Job';
import { useSelector, useDispatch } from 'react-redux';

import { getAllJobs } from '../../features/allJobs/allJobsSlice';

import Loading from '../loading/Loading';

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

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center={true}></Loading>
      </Wrapper>
    );
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>Nothing here but us chickens...</h2>
      </Wrapper>
    );
  }

  const { totalJobs } = jobs;

  return (
    <Wrapper>
      <h5>{totalJobs} job found</h5>
      <div className="jobs">
        {jobs?.jobs?.map((job) => {
          return <Job key={job._id} {...job}></Job>;
        })}
      </div>
    </Wrapper>
  );
}
