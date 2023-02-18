/* eslint-disable react/no-array-index-key */
import Techs from '../components/Techs';
import StudentCard from '../components/StudentCard';
import data from '../utils/data/data.json';
import Thanks from '../components/Thanks';

function Home() {
  return (
    <>
      <div className="cohort" id="cohort">
        {data.map((student, index) => (
          <StudentCard student={student} key={index} />
        ))}
      </div>
      <Techs />
      <Thanks />
    </>
  );
}

export default Home;
