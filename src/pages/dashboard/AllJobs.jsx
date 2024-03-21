import { useDispatch } from 'react-redux';
import { getAllJobs } from '../../features/job/jobSlice';

export default function AllJobs() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(getAllJobs())}>test dispatch</button>;
}
