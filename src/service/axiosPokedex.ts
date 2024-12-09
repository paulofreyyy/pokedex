import axios from "axios";

interface Pokemon {
    name: string;
    url: string;
}

interface PokemonDetails {
    name: string;
    types: string[];
    number: number;
    image: string;
}

export const fetchPokemons = async (): Promise<PokemonDetails[]> => {
    try {
        const { data } = await axios.get<{ results: Pokemon[] }>('https://pokeapi.co/api/v2/pokemon?limit=10');

        const pokemonsDetails = await Promise.all(
            data.results.map(({ url }) => 
                axios.get(url).then(({ data }) => ({
                    name: data.name,
                    types: data.types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name),
                    number: data.id,
                    image: data.sprites.front_default,
                }))
            )
        );

        return pokemonsDetails;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao buscar pokémons.');
    }
};
