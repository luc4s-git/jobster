import { FormInput, FormSelect } from '../index';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  handleChange,
  clearFilters,
} from '../../features/allJobs/allJobsSlice';

import styled from 'styled-components';
const Wrapper = styled.section`
  .form {
    width: 100%;
    max-width: 100%;
  }
  .form-center {
    display: grid;
    gap: 0.5rem 2rem;
  }
  .form-row {
    margin-bottom: 0;
  }
  .btn-block {
    align-self: end;
  }
  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default function SearchContainer() {
  const dispatch = useDispatch();

  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);

  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  const handleInputChange = (e) => {
    if (isLoading) return;
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>Search Form</h4>
        <div className="form-center">
          {/* search input */}
          <FormInput
            label={'search'}
            name={'search'}
            type={'text'}
            value={search}
            onChange={handleInputChange}
          />
          {/* status select */}
          <FormSelect
            label={'status'}
            name={'searchStatus'}
            value={searchStatus}
            onChange={handleInputChange}
            list={['all', ...statusOptions]}
          />
          {/* type select */}
          <FormSelect
            label={'type'}
            name={'searchType'}
            value={searchType}
            onChange={handleInputChange}
            list={['all', ...jobTypeOptions]}
          />
          {/* sort select */}
          <FormSelect
            label={'sort'}
            name={'sort'}
            value={sort}
            list={sortOptions}
            onChange={handleInputChange}
          />
          <button
            type="button"
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={(e) => handleSubmit(e)}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
