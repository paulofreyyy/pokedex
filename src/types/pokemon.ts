export interface PokemonDetails {
    name: string;
    types: string[];
    number: number;
    image: string;
    hp?: number;
    attack?: number;
    defense?: number;
    sp_attack?: number;
    sp_defense?: number;
    speed?: number;
}