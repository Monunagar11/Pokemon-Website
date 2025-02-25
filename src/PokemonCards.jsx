import { useEffect, useState } from "react";
import PokemonDetails from "./PokemonDetails";

function PokemonCards(){

    const [Pokemon,setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon?limit=28&offset=5";

    const fetchPokemon = async()=>{
        try{
            const GetPokemon = await fetch(API);
            const res = await GetPokemon.json();

            const DetailedPokemon = res.results.map(async(curr)=>{
                const data = await fetch(curr.url);
                const result = await data.json();
                return result
            })

            // console.log(DetailedPokemon);
            const DetailResponse = await Promise.all(DetailedPokemon)
            console.log(DetailResponse);
            setPokemon(DetailResponse);
            setLoading(false);
            

        }
        catch(error){
            console.log(error)
            setLoading(false)
            setError(error);
        }

    }

    const searchData = Pokemon.filter((currPokemon)=>
        currPokemon.name.toLowerCase().includes(search.toLowerCase())
    );
        
    

    useEffect(()=>{
       fetchPokemon(); 
    },[])

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return(<div>
            <h1>{error.message}</h1>
            
            </div>);
    }

    return(
        <>
        <header>
            <h1>
                Let's Catch the Pokemon
            </h1>
        </header>
    <div className="Pokemon-search">
            
    <input type="text" 
     placeholder="Search Pokemon"
     value={search}
     onChange={(e)=>setSearch(e.target.value)} />

    </div>
        <section className="container" >
        <ul className="cards">
            {
                // Pokemon.map((curr)=>{
                    searchData.map((curr)=>{
                    return <PokemonDetails key={curr.id} PokemonData={curr} />
                })
            }
        </ul>

        </section>
        </>
    )
}
export default PokemonCards;