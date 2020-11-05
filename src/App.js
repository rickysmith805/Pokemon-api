import {useState, useEffect} from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const[pokemon,setPokemon] = useState([]);

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
  //     .then(res => res.json())
  //     .then(res => setPokemon(res.results))
  //     .catch(err => console.log(err))

  // },[])

  const getPokemonNames = () =>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => res.json())
      .then(res => setPokemon(res.results))
      .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <button 
      className="btn btn-primary"
      onClick={getPokemonNames}
      >Fetch Pokemon</button>
      {
        pokemon.map((p,i) => {
          return <PokemonCard 
                      pokemon={p}
                      key={i}
                  />

        })
      }
    </div>
  );
}

export default App;
