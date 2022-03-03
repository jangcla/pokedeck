import { useState, useEffect } from 'react'
import './pokemon-card.css'
import DisplayCard from '../card-display/card-display';

// OPTIMIZED SOLUTION VERSION (ORIGINAL SOLUTION COMMENTED BELLOW *they both work)
// - Doesn't fetch 5 promises at once, instead fetches one at a time on passed in component
// - Cleaner and less convoluted compared to first attempt
// - Added a reset button & function to restart deck

function  PokemonCard({ frontCard, backCard, deckCard }) {
    //function that generates 5 random numbers from 1 - 500
    //use the 5 inside the array to fetch relevant pokemon photo
    let [pokemonImageUrl, setPokemonImageUrl] = useState("");
    let [randomIndexes, setRandomIndexes] = useState([]);

    function randomIndexGenerator() {
        let indexArray = [];
        
        for ( let i = 0; i < 5; i++ ) {
           let number =  Math.floor(Math.random() * 500);

           indexArray.push(number);
        }

        setRandomIndexes(indexArray);
    }
    
    function generateCards () {
        setPokemonImageUrl("");

        randomIndexGenerator();
        
    }
    function resetCards () {
        setPokemonImageUrl("");

        setRandomIndexes([]);
        
    }


    //create an if its clicked then you want to show the photo
    return (
        <div className="pokemon-card-container">

            <div className='display-container'>
                {
                    pokemonImageUrl ? 
                        <div className='shown-pokemon-container'>
                            <img src={frontCard} className="front-card-display" alt=''/>
                            <img src={pokemonImageUrl} className="shown-pokemon" alt=''/>
                        </div>
                    :
                        <h1>Pokemon Shuffler</h1>

                }   
            </div>
            
            <div className='card-display'>
                {
                    randomIndexes.length > 0 ?
                        randomIndexes.map((index, i) => <DisplayCard className="back-card" key={i} backCard={backCard} frontCard={frontCard} index={index} setPokemonImageUrl={ setPokemonImageUrl }/>)
                    :
                        <img src={deckCard} className="card-stack" alt=''/>
                }
            </div>

            {
                randomIndexes.length > 0 ? 
                    <button type='button' onClick={ resetCards } className="deal-button">
                        Reset Cards
                    </button>
                :
                    <button type='button' onClick={ generateCards } className="deal-button">
                        Deal Cards
                    </button>

            }

        </div>
    )

}

export default PokemonCard;

// BRUTE-FORCED ORIGINAL CODE
// - Original idea to fetch 5 promises
// - Too convoluted with multiple fetches taking up alot of space 
// - Original problem was the array of the fetched urls returned only promises so I had to make it complicated by saving each state 

// function PokemonCard({ frontCard, backCard, deckCard }) {
// let [randomIndexes, setRandomIndexes] = useState([]);
// let [pokemon0, setPokemon0] = useState("");
// let [pokemon1, setPokemon1] = useState("");
// let [pokemon2, setPokemon2] = useState("");
// let [pokemon3, setPokemon3] = useState("");
// let [pokemon4, setPokemon4] = useState("");
// let [pokemonImages, setPokemonImages] = useState("");

// let [displayedPokemon, setDisplayedPokemon] = useState("");

// useEffect(() => {

//     if (randomIndexes.length > 0) {
//         fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndexes[0]}/`)
//             .then(response => response.json())
//             .then(data => data.sprites.other["official-artwork"]["front_default"])
//             .then(image => setPokemon0(image))
//         fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndexes[1]}/`)
//             .then(response => response.json())
//             .then(data => data.sprites.other["official-artwork"]["front_default"])
//             .then(image => setPokemon1(image))
//         fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndexes[2]}/`)
//             .then(response => response.json())
//             .then(data => data.sprites.other["official-artwork"]["front_default"])
//             .then(image => setPokemon2(image))
//         fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndexes[3]}/`)
//             .then(response => response.json())
//             .then(data => data.sprites.other["official-artwork"]["front_default"])
//             .then(image => setPokemon3(image))
//         fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndexes[4]}/`)
//             .then(response => response.json())
//             .then(data => data.sprites.other["official-artwork"]["front_default"])
//             .then(image => setPokemon4(image))
//     }

// }, [randomIndexes])

// useEffect(() => {
//     if (pokemon4 !== "") {
//         setPokemonImages([pokemon0, pokemon1, pokemon2, pokemon3, pokemon4])
//     }

// }, [pokemon0, pokemon1, pokemon2, pokemon3, pokemon4])



// function randomIndexGenerator() {
//     let indexArray = [];

//     for (let i = 0; i < 5; i++) {
//         let number = Math.floor(Math.random() * 500);

//         indexArray.push(number);
//     }

//     return indexArray

// }

// function generateCards() {
//     setDisplayedPokemon("");
//     setPokemonImages([]);
//     let indexes = randomIndexGenerator();
//     setRandomIndexes(indexes);

// }


// //create an if its clicked then you want to show the photo
// return (
//     <div className="pokemon-card-container">

//         <div className='display-container'>
//             {
//                 displayedPokemon ?
//                     <div className='shown-pokemon-container'>
//                         <img src={frontCard} className="front-card-display" alt='' />
//                         <img src={displayedPokemon} className="shown-pokemon" alt='' />
//                     </div>
//                     :
//                     <h1>Pokemon Shuffler</h1>

//             }
//         </div>

//         <div className='card-display'>
//             {
//                 pokemonImages.length > 0 ?
//                     pokemonImages.map((url, i) => <DisplayCard className="back-card" key={i} backCard={backCard} frontCard={frontCard} url={url} setDisplayedPokemon={setDisplayedPokemon} />)
//                     :
//                     <img src={deckCard} className="card-stack" alt='' />
//             }
//         </div>

//         <button type='button' onClick={generateCards} className="deal-button">
//             Deal Cards
//         </button>

//     </div>
// )

// }

// export default PokemonCard;