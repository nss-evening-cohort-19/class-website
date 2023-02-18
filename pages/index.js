/* eslint-disable react/no-array-index-key */
import Techs from '../components/Techs';
import StudentCard from '../components/StudentCard';
import data from '../utils/data/data.json';

function Home() {
  return (
    <>
      <div className="cohort">
        {data.map((student, index) => (
          <StudentCard student={student} key={index} />
        ))}
      </div>
      <Techs />
    </>
  );
}

export default Home;
