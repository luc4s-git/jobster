import { StatsContainer, ChartContainer } from '../../components';
import { useSelector } from 'react-redux';

export default function Stats() {
  const { monthlyApplications } = useSelector((store) => store.allJobs);
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartContainer />}
    </>
  );
}
