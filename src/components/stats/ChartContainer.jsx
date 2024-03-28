import { useState } from 'react';

import BarChartComponent from './BarChart';
import AreaChartComponent from './AreaChart';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
  h4 {
    margin-bottom: 0.75rem;
  }
  button {
    background-color: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

export default function ChartContainer() {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? 'area chart' : 'bar chart'}
      </button>

      {barChart ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
    </Wrapper>
  );
}
