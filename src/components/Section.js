import React, {useState} from 'react'
import { ImageData } from './ImageData'
import './styles/Section.scss'
import SecSection from './SecSection'
import './styles/SecSection.scss'

const Section = ({slides}) => {

    const [current,setCurrent] = useState(0)

   const length = slides.length 


    return (
        <div>
        <section className='mysec'>
               <div className="buttons">
                   <h4>
                       <span className='left' onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}>Prev</span>
                       <span className='right' onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}>Next</span>
                   </h4>
                   <div className='main-text'>
                        <h1>Night Vision</h1>
                        <div className='button'>
                                <button>Listen</button>
                        </div>
                    </div>
                   {ImageData.map((slide,index) => {
                   return (
                       <div className={current === index ? 'slide active' : 'slide'}>
                       {index === current && (
                           <div className='image-frame'>
                              <img src={slide.image} alt="img"/>
                            </div>
                       )}
                       </div>
                   )
               })}
            
               </div>
   
        </section>
                    <SecSection/>
                    </div>
    )
}

export default Section
