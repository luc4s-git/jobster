import { StatsContainer, ChartContainer } from '../../components';
import { useSelector } from 'react-redux';

export default function Stats() {
  const { monthlyApplications } = useSelector((store) => store.allJobs);
  console.log();
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartContainer />}
    </>
  );
}
