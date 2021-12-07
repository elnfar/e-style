import React from 'react'
import story from './assets/story.png'
import './styles/SecSection.scss'

const Stories = () => {
    return (
        <div>
        <div className='story'>
            <img src={story} alt="logo" />
        </div>

            <div className="dropdown">
                <span className='sort'>sort by</span>
                <span className='plus'>+</span>
            </div>

        </div>
    )
}

export default Stories
