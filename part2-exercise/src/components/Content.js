import React from 'react'


const Content = () => {
    return(
        <div>
            {course.map(course => {
                <p>{course.parts.name} {course.parts.exercise}</p>
            })}
        </div>
    )
}

export default Header