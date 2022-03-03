import { useEffect, useState } from 'react'
import './card-display.css'

// OPTIMIZED SOLUTION VERSION (ORIGINAL SOLUTION COMMENTED BELLOW *they both work)
// - Each component rendered with a different random index when clicked then fetches the image url once through use effect 

function DisplayCard({ backCard, index, setPokemonImageUrl } ) {
    let [display, setDisplay] = useState(false);
    let [url, setUrl] = useState("");

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
            .then(response => response.json())
            .then(data => data.sprites.other["official-artwork"]["front_default"])
            .then(imageUrl => setUrl(imageUrl))
    }, [])

    function clickCard() {
        setDisplay(!display);
        setPokemonImageUrl(url);
    }

    return(
        <div className='displayed-card' onClick={ clickCard }>
            {
                display === false ? 
                    <img src={backCard} className="back-of-card" alt=''/>
                :
                    null
            }
        </div>
    )
}

export default DisplayCard;

// BRUTE-FORCED ORIGINAL CODE
// - A little simpler as it had no need to fetch any API data 

// function DisplayCard({ backCard, url, setDisplayedPokemon }) {
// let [display, setDisplay] = useState(false)

// function clickCard() {
//     setDisplay(!display);
//     setDisplayedPokemon(url)
// }

// return (
//     <div className='displayed-card' onClick={clickCard}>
//         {
//             display === false ?
//                 <img src={backCard} className="back-of-card" alt='' />
//                 :
//                 null
//         }
//     </div>
// )
// }

// export default DisplayCard;