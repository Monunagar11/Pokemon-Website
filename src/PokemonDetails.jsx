function PokemonDetails({PokemonData}){
    const {name,height,sprites,id} = PokemonData;
    
    return(
        <li className="Pokemon-card">
                <figure>
                    <img src={sprites.other.dream_world.front_default} alt="name" />
                </figure>
                <h1>{name}</h1>
                <div className="Pokemon-info Pokemon-highlight">
                    <p>{PokemonData.types.map((t)=>t.type.name).join(",")}</p>
                </div>

                <div className="grid-thr-cols">
                    <p className="Pokemoninfo">ID:<span>{id}</span></p>
                    <p className="Pokemoninfo">Height:<span>{height}</span></p>
                    <p className="Pokemoninfo">Speed:<span>{PokemonData.stats[5].base_stat}</span></p>
                </div>

                <div className="grid-thr-cols">
                    <div className="Pokemoninfo">
                        <p>{PokemonData.abilities[0].ability.name}</p>
                        <span>Attack</span>
                    </div>
                    <div className="Pokemoninfo">
                        <p>{PokemonData.base_experience}</p>
                        <span>experience</span>
                    </div>
                    <div className="Pokemoninfo">
                        <p>{PokemonData.abilities.map((a)=>a.ability.name).slice(0,1).join(",")}</p>
                        <span>abilities</span>
                    </div>
                </div>   
                
            </li>
    )
}

export default PokemonDetails;