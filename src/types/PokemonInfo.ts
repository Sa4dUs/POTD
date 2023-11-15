interface PokemonInfo {
    pokemon: string,
    sprite: string,
    type1: string;
    type2: string
    // weight: number;
    // height: number;
    color: string,
    generation: string;
    similarity: {
        type1: number;
        type2: number
        // weight: number;
        // height: number;
        color: number,
        generation: number;
    }
}

export default PokemonInfo