import { kv } from "@vercel/kv";
import PokeAPI from "pokeapi-typescript";

import * as fs from "fs";

import {
    getRandomInt,
    calculateSimilarity,
    calculateComparison,
    findRange,
    calculateEqual,
} from "./misc";
import PokemonInfo from "@/types/PokemonInfo";

let pokemon = "mew";

const generationRanges: [number, number][] = [
    [1, 151],
    [152, 251],
    [252, 386],
    [387, 493],
    [494, 649],
    [650, 721],
    [722, 809],
    [810, 905],
    [906, 1010],
];

async function retrieveAllPokemonToJSON() {
    let data: { [pokemon: string]: string } = {};

    for (let i = 1; i <= 1010; i++) {
        let pokemon = await getPokemonFromID(i);
        let name = pokemon.forms[0].name;
        let sprite = pokemon.sprites.front_default;

        data[name] = sprite;
    }

    let json = JSON.stringify(data);

    try {
        fs.writeFile("data.json", json, () => {});
        console.log("Data successfully written to data.json");
    } catch (error) {
        console.error("Error writing data to data.json:", error);
    }
}

async function generateRandomPokemon() {
    let id = getRandomInt(1, 1011);

    return await PokeAPI.Pokemon.resolve(id);
}

function checkWin(data: PokemonInfo) {
    let res = true;

    for (const [key, value] of Object.entries(data.similarity)) {
        if (value != 1) {
            return false;
        }
    }

    return true;
}

async function getPokemonFromID(id: number) {
    let result = await PokeAPI.Pokemon.resolve(id);

    return result;
}

async function getPokemonFromName(name: string) {
    let result = await PokeAPI.Pokemon.resolve(name);

    return result;
}

async function getPokemonSpeciesFromName(name: string) {
    let result = await PokeAPI.PokemonSpecies.resolve(name);

    return result;
}

async function getSpriteFromName(name: string) {
    let pokemon = await getPokemonFromName(name);

    return pokemon.sprites.front_default;
}

async function isValidPokemon(name: string) {
    return (await getPokemonFromName(name)) != null;
}

async function getPokemonTypeFromName(name: string) {
    let pokemon = await getPokemonFromName(name);

    return pokemon["types"].map((element) => element["type"]["name"]);
}

async function calculateTypeSimilarity(name: string) {
    const targetTypes = await getPokemonTypeFromName(pokemon);
    const guessTypes = await getPokemonTypeFromName(name);

    return calculateSimilarity(targetTypes, guessTypes);
}

async function getPokemonWeightFromName(name: string) {
    let pokemon = await getPokemonFromName(name);

    return pokemon["weight"];
}

async function calculateWeightSimilarity(name: string) {
    const targetWeight = await getPokemonWeightFromName(pokemon);
    const guessWeight = await getPokemonWeightFromName(name);

    return calculateComparison(targetWeight, guessWeight);
}

async function getPokemonHeightFromName(name: string) {
    let pokemon = await getPokemonFromName(name);

    return pokemon["height"];
}

async function calculateHeightSimilarity(name: string) {
    const targetHeight = await getPokemonHeightFromName(pokemon);
    const guessHeight = await getPokemonHeightFromName(name);

    return calculateComparison(targetHeight, guessHeight);
}

async function getPokemonColorFromName(name: string) {
    let result = await getPokemonSpeciesFromName(name);

    return result.color.name;
}

async function calculateColorSimilarity(name: string) {
    const targetColor = await getPokemonColorFromName(pokemon);
    const guessColor = await getPokemonColorFromName(name);

    return calculateEqual(targetColor, guessColor);
}

async function getPokemonGenerationFromName(name: string) {
    let pokemon = await getPokemonFromName(name);

    return findRange(pokemon.id, generationRanges);
}

async function calculateGenerationSimilarity(name: string) {
    const targetGeneration = await getPokemonGenerationFromName(pokemon);
    const guessGeneration = await getPokemonGenerationFromName(name);

    return calculateComparison(targetGeneration, guessGeneration);
}

async function checkPokemon(name: string) {
    pokemon = await kv.get("currentPokemon") || "mew";

    const spriteURL = await getSpriteFromName(name);
    const types = await getPokemonTypeFromName(name);
    // const weight = await getPokemonWeightFromName(name)
    // const height = await getPokemonHeightFromName(name)
    const color = await getPokemonColorFromName(name);
    const generation = await getPokemonGenerationFromName(name);

    const typeSimilarity = await calculateTypeSimilarity(name);
    // const weightSimilarity = await calculateWeightSimilarity(name)
    // const heightSimilarity = await calculateHeightSimilarity(name)
    const colorSimilarity = await calculateColorSimilarity(name);
    const generationSimilarity = await calculateGenerationSimilarity(name);

    const similarity = {
        pokemon: name,
        sprite: spriteURL,
        type1: types[0],
        type2: types[1] || "none",
        // weight: weight,
        // height: height,
        color: color,
        generation: generation,
        similarity: {
            type1: typeSimilarity[0],
            type2: typeSimilarity[1],
            // "weight": weightSimilarity,
            // "height": heightSimilarity,
            color: colorSimilarity,
            generation: generationSimilarity,
        },
    };

    return similarity;
}

export {
    retrieveAllPokemonToJSON,
    generateRandomPokemon,
    checkWin,
    isValidPokemon,
    checkPokemon,
};
