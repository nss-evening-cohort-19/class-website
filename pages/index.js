/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import Techs from '../components/Techs';
import StudentCard from '../components/StudentCard';
import data from '../utils/data/data.json';
import Thanks from '../components/Thanks';
import ClassGif from '../components/ClassGif';

function Home() {
  return (
    <>
      <Image src="/images/evening-cohort-19-high-resolution-logo-color-on-transparent-background.png" alt="evening cohort 19" width={600} height={40} layout="responsive" />
      <ClassGif />
      <h2 id="developers" className="developers-title">DEVELOPERS</h2>
      <div className="cohort">
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
