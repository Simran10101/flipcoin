import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = (props) => {
    const {imageFileName, title, description, price}  = props;
    const imageUrl = `/images/${imageFileName}`;
    return (
        <div className='card'>
            <img src = {imageUrl} className='card-img-top' alt = {title} height="100" width="100" />
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}</p>
                <p className='card-text'><s>{price}</s></p>
            </div>
        </div>
    );
};

export default ProductCard;