import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Techs() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      // Import all images in the images directory
      const imageContext = require.context('../public/images/techstack', false, /\.(png|jpe?g|svg)$/);
      const imageKeys = imageContext.keys();
      const imageImports = imageKeys.map((key) => imageContext(key));

      setImages(imageImports);
    };

    importImages();
  }, []);

  return (
    <div className="tech-stack">
      <h2 className="tech-stack-title">TECHNOLOGIES</h2>
      <div id="technologies" className="technologies">
        {images.map((image) => (
          <div key={image.default.src}>
            <Image src={image.default.src} alt="tech-logo" width={60} height={50} objectFit="contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
