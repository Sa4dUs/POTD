import React, { useState, useEffect, useRef } from "react";

import PokemonCard from "./PokemonCard";
import PokemonInfo from "@/types/PokemonInfo";
import { kv } from "@vercel/kv";

interface PokemonListProps {
    items: PokemonInfo[];
}

const excludedFields = ["sprite"];

const HeaderField: React.FC<{ label: string }> = ({ label }) => {
    if (excludedFields.includes(label)) return null;

    return (
        <div className="flex items-center justify-center">
            <div className="flex-shrink-0 w-16 text-center">
                <span className="text-gray-600 text-xs">
                    {label.toUpperCase()}
                </span>
            </div>
        </div>
    );
};

const PokemonList: React.FC<PokemonListProps> = ({ items }) => {
    let [lastPokemon, setLastPokemon] = useState<string>("");
    let [guessCount, setGuessCount] = useState<number>(0);

    (async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/pokemon/last`,
            {
                method: "GET",
            }
        );
        const responseData = await response.json();
        setLastPokemon(responseData.pokemon);
    })();

    (async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/pokemon/increase`,
            {
                method: "GET",
            }
        );
        const responseData = await response.json();
        setGuessCount(responseData.count);
    })();

    if (items.length === 0) {
        return (
            <div className="mt-4 text-center text-gray-800">
                <div className="bg-white p-2 rounded border-2 border-black my-4 box-content w-fit m-auto">
                    Yesterday&apos;s Pokemon was{" "}
                    <span className="text-lime-400 font-bold">
                        {lastPokemon.toUpperCase()}
                    </span>
                </div>
                <div className="bg-white p-2 rounded border-2 border-black my-4 w-fit m-auto">
                    <span className="text-yellow-500 font-bold">
                        {guessCount}
                    </span>{" "}
                    Trainers Already Caught It!
                </div>
            </div>
        ); // Return null if there are no items
    }

    const fieldNames = ["Pokemon", ...Object.keys(items[0].similarity)];

    return (
        <div>
            <ul className="flex flex-wrap justify-center">
                <li className="bg-white p-2 rounded border-2 border-black my-1 flex w-full justify-between items-center">
                    {fieldNames.map((fieldName, index) => (
                        <HeaderField key={index} label={fieldName} />
                    ))}
                </li>
                <div className="w-full">
                    {items.map((data, index) => (
                        <PokemonCard key={index} data={data} />
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default PokemonList;
