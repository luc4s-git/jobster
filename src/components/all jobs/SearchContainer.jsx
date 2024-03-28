import { FormInput, FormSelect } from '../index';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

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
    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
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
            list={['all', ...statusOptions]}
            onChange={handleInputChange}
          />
          {/* type select */}
          <FormSelect
            label={'type'}
            list={jobTypeOptions}
            onChange={handleInputChange}
          />
          {/* sort select */}
          <FormSelect
            label={'sort'}
            list={sortOptions}
            onChange={handleInputChange}
          />
          <button
            type="button"
            className="btn btn-block btn-danger"
            onClick={() => console.log('clear filters')}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
