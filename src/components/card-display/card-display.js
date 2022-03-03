import { useState } from 'react'
import './card-display.css'


function DisplayCard( { backCard, url, setDisplayedPokemon } ) {
    let [display, setDisplay] = useState(false)

    function clickCard() {
        setDisplay(!display);
        setDisplayedPokemon(url)
    }

    return(
        <div className='displayed-card' onClick={ clickCard }>
            {
                display === false ? 
                    <img src={backCard} className="back-of-card"/>
                :
                    null
            }
        </div>
    )
}

export default DisplayCard;