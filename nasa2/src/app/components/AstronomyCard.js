import React from 'react'

const AstronomyCard = (props) => {

    const {title , url} =props.data;

    return (
        <div>
            <h1>{title}</h1>
            <img src={url} alt="" />
        </div>
    )
}

export default AstronomyCard
