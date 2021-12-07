import React from 'react'
import Stories from './Stories'
import './styles/ActiveHeader.scss'

const ActiveHeader = () => {
    return (
        <div>
        <div className='all-section'>
            <div className='sec-header'>
                <h1>
                    <span className='learn'>learn</span> 
                            and
                    <span className='teach'>teach</span>
                </h1>
                <h3>
                    <span>About us</span>
                    <span className='small'>we are giving free lessons to people for increasing quality</span>
                </h3>
            </div>
        </div>
        <Stories/>
        </div>
    )
}

export default ActiveHeader
