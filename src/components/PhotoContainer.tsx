import React, {useState} from 'react';

type ImageProps = {
    src: string; 
    alt: string; 
}; 

const PhotoContainer:React.FC<ImageProps> = ({src, alt})=>{

    const [isLoaded, setIsLoaded] = useState(false); 

    const handleImageLoad = () => {
        setIsLoaded(true); 
    }; 

    return (
        <div className = "image-container">
            <img
                src = {src}
                alt ={alt}
                className = {isLoaded ? 'loaded': ''}
                onLoad = {handleImageLoad}
            />
        </div>
    );
};

export default PhotoContainer