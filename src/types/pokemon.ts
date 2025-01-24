export interface PokemonDetails {
    name: string;
    types: string[];
    number: number;
    images: string[];
    hp?: number;
    attack?: number;
    defense?: number;
    sp_attack?: number;
    sp_defense?: number;
    speed?: number;
    weight?: number;
    height?: number;
    evolution_chain?: any;
}

export interface PokemonTypes {
    weakness: string[];
    strength: string[];
}

export const pokemonTypes = [
    "Todos",
    "Normal",
    "Fighting",
    "Flying",
    "Poison",
    "Ground",
    "Rock",
    "Bug",
    "Ghost",
    "Steel",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Psychic",
    "Ice",
    "Dragon",
    "Dark",
    "Fairy"
];