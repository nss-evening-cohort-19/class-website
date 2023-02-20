import Image from 'next/image';

export default function ClassGif() {
  return (
    <div className="gif-container">
      <Image className="gif" src="/images/cohort-e19-class.gif" alt="E-19 Class Zoom" width={800} height={400} layout="responsive" />
    </div>
  );
}
