import React,{useEffect,useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  //set the data to state 
  const [pokemons, setPokemons] = useState([])

  //fetch the data first

  useEffect(() =>{
    fetch('  http://localhost:3001/pokemon')
    .then(r =>r.json())
    .then(setPokemons)

  },[])

  const handleNewPoke = (shinyPoke) => {
   
    setPokemons([   shinyPoke, ...pokemons]) 
  }





  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPoke={handleNewPoke}/>
      <br />
      <Search />
      <br />
      <PokemonCollection pokemons= {pokemons} />
    </Container>
  );
}

export default PokemonPage;
