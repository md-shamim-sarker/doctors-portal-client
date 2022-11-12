import React from 'react';

const InfoCard = ({infoCard}) => {
    const {name, description, icon, bgClass} = infoCard;
    return (
        <div className={`card lg:card-side shadow-xl ${bgClass} text-white p-5`}>
            <figure><img src={icon} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;