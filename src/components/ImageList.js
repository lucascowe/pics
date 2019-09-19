import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map ((image) => {
        // return <img key={id} description={description} src={urls.regular} />
        return <ImageCard key={image.id} image={image} />
    });
    return <div className='image-list'>{images}</div>;
};

export default ImageList;