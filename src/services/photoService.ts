import axios from 'axios';
import { Photo } from '../types';

export const fetchPhotos = async (): Promise<Photo[]> => {
  console.log(process.env.REACT_APP_API_KEY); 
  try{
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: { count: 9 },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
      }
    });
    
    return response.data.map((photo: any) => ({
      id: photo.id,
      url: photo.urls.small,
    }));

  }catch(e){
    console.error("Error fetching images",e); 
    return [];
  }
  
  
};
