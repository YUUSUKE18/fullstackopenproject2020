import React from 'react'
import Button from './Button';

const Count = ({onClick}) => {
    return(
        <div>
            <h2>Give FeedBack</h2>
            <Button onClick={onClick} title="Good" />
            <Button onClick={onClick} title="Neutral"/>
            <Button onClick={onClick} title="Bad" />
        </div>
    )
}

export default Count