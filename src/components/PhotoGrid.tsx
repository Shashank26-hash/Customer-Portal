import React, { useEffect, useState } from 'react';
import { Photo } from '../types';
import { fetchPhotos } from '../services/photoService';
import PhotoContainer from './PhotoContainer';

const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const updatePhotos = async () => {
      const newPhotos = await fetchPhotos();
      setPhotos(newPhotos);
    };

    updatePhotos();
    const interval = setInterval(updatePhotos, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="photo-grid">
      {photos.map((photo) => (
        <PhotoContainer key={photo.id} src={photo.url} alt="Customer" />
      ))}
    </div>
  );
};

export default PhotoGrid;
