import React from 'react'
import './Environments.css'
import ReactCardFlip from 'react-card-flip'
import { ENVIRONMENTS } from '../../utils/data'
import Slider from 'react-slick'

const Environments = () => {

    const [ isFlipped, setIsFlipped ] = React.useState(false)

    function flipcard(){
        setIsFlipped(!isFlipped)
    }

  return (
    <div>
        <div>Environment Technologies</div>       

            <Slider>
            {ENVIRONMENTS.map((item) => (
                <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
                    <div className="card" onClick={() => flipcard(item)}>
                    <div className="env-icon">
                        <img src={item.icon} alt={item.title} />
                    </div>
                        <h6>{item.title}</h6>
                    </div>
                    <div className="card card-back" onClick={flipcard}>
                        <h6>{item.title}</h6>
                    </div>
                </ReactCardFlip>
            ))}
            </Slider>
    </div>   
    )
}

export default Environments