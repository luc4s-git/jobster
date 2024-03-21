import { useSelector, useDispatch } from 'react-redux';
import {
  handleInputValues,
  clearInputValues,
} from '../../features/job/jobSlice';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { FormInput, FormSelect } from '../../components/index';

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;

export default function AddJob() {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleInputValues({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error('Please fill out all fields');
      return;
    }
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className="form-center">
          {/* position */}
          <FormInput
            type={'text'}
            name={'position'}
            value={position}
            label={'position'}
            onChange={handleChange}
          ></FormInput>
          {/* company */}
          <FormInput
            type={'text'}
            name={'company'}
            value={company}
            label={'company'}
            onChange={handleChange}
          ></FormInput>
          {/* job location */}
          <FormInput
            type={'text'}
            name={'jobLocation'}
            value={jobLocation}
            label={'job location'}
            onChange={handleChange}
          ></FormInput>
          {/* status */}
          <FormSelect
            name={'status'}
            value={status}
            jobTypeOptions={jobTypeOptions}
            handleChange={handleChange}
          ></FormSelect>
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearInputValues())}
            >
              Clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}
