import React, {useState} from 'react'
import './Card.css'
import cover from './assets/cover.png' // Import img as variables in react
import sword from './assets/sword.png'

function Card() {

    const [flipped, setFlip] = useState(false);

    const handleFlip = () => {
        setFlip((prevState) => !prevState)
    }

    return (
        <div className='card'>
            <div className={flipped ? 'flipped' : ''}>
                <img className='front' src={cover} alt='card front' onClick={handleFlip} />
                <img className='back' src={sword} alt='card back' onClick={handleFlip} />
            </div>
        </div>
    )
}

export default Card
