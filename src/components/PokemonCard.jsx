const PokemonCard = props =>{
    
    const {pokemon} = props;

    return(
        <ul className="list-group">
            <li className="list-group-item">{pokemon.name}</li>
        </ul>
    );
}

export default PokemonCard; 