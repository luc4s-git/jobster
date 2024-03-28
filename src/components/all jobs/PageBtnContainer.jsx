import { useSelector, useDispatch } from 'react-redux';
// import { nextPage } from '../../features/allJobs/allJobsSlice';

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
`;

export default function PageBtnContainer() {
  // const dispatch = useDispatch();
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const prevPage = () => {
    console.log(page - 1);
  };
  const nextPage = () => {
    console.log(page + 1);
  };

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((item) => {
          return (
            <button
              className={item === page ? 'pageBtn active' : 'pageBtn'}
              type="button"
              key={item}
              onClick={() => console.log('change page')}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        <HiChevronDoubleRight />
        next
      </button>
    </Wrapper>
  );
}
