import React from 'react';

const Pictures = (props) => {
    return (
        <div className="container">
            <div className="item">
                <img className="image" src={props.url} onClick={()=>props.pushClick(props)} alt="img"/>
                <i className="material-icons">more_horiz</i>
            </div>
        </div>
    )
}

export default Pictures;