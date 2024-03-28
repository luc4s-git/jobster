import { useSelector, useDispatch } from 'react-redux';
import {
  changePage,
  nextPage,
  prevPage,
} from '../../features/allJobs/allJobsSlice';

import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import styled from 'styled-components';
const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .prev-btn,
  .next-btn {
    width: 100px;
    height: 40px;
    background-color: var(--white);
    border-color: transparent;
    border-radius: var(--borderRadius);
    color: var(--primary-500);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .prev-btn:hover,
  .next-btn:hover {
    background-color: var(--primary-500);
    color: var(--white);
  }
  .btn-container {
    background-color: var(--primary-100);
    border-radius: var(--borderRadius);
  }
  .pageBtn {
    background-color: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    transition: var(--transition);
    border-radius: var(--borderRadius);
    cursor: pointer;
  }
  .pageBtn.active {
    background-color: var(--primary-500);
    color: var(--white);
  }
`;

export default function PageBtnContainer() {
  const dispatch = useDispatch();
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const handlePrevPage = () => {
    const newPage = page - 1;
    if (newPage < 1) return dispatch(prevPage(numOfPages));
    dispatch(prevPage(newPage));
  };

  const handleNextPage = () => {
    const newPage = page + 1;
    if (newPage > numOfPages) return dispatch(nextPage(1));
    dispatch(nextPage(newPage));
  };

  return (
    <Wrapper>
      <button type="button" className="prev-btn" onClick={handlePrevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((item) => {
          return (
            <button
              className={page === item ? 'pageBtn active' : 'pageBtn'}
              type="button"
              key={item}
              onClick={() => dispatch(changePage(item))}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={handleNextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
}
