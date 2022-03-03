import './App.css';
import backCard from './images/back-card.png'
import frontCard from './images/front-card.png'
import deckCard from './images/deck-card.png'


import PokemonCard from './components/pokemon-card/pokemon-card'


function App() {
  return (
    <div className="App">
      < PokemonCard frontCard={frontCard} backCard={backCard} deckCard={deckCard}/>
    </div>
  );
}

export default App;
