import React from 'react';

export const Card = ({ item }) => {
    return (
        <div className="col-md-4">
            <div className="card mb-4" >
                <img src={item.urls.small} className="card-img-top picture" alt="..." />

            </div>
        </div>
    )
}