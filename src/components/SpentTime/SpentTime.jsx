import React from 'react';
import './SpentTime.css'

const SpentTime = ({time}) => {
    return (
        <div className='spent-time'>
                <h2>Spent Time on Read : {time}</h2>
        </div>
    );
};

export default SpentTime;