import React from 'react';

const Service = ({service}) => {
    const {title, image, details} = service;
    return (
        <div className="card shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="..." className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Service;