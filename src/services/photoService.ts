import axios from 'axios';
import { Photo } from '../types';

export const fetchPhotos = async (): Promise<Photo[]> => {

  try{
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: { count: 9 },
      headers: {
        Authorization: `Client-ID 6QhhlDFHzC7xX8iNtJal3yYiq_NdIeUx8pcfA8dvuC8`
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
