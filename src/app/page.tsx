"use client";
// Import necessary dependencies and components
import React, { useState } from "react";
import PokemonInfo from "@/types/PokemonInfo";
import PokemonList from "@/components/PokemonList";
import { useAppContext } from "@/components/AppContext";
import data from "@/lib/data";
import { checkWin } from "@/lib/pokeapi";
import AutoCompleteInput from "@/components/AutoCompleteInput";
import { kv } from "@vercel/kv";
import YouWin from "@/components/YouWin";

let guesses: string[] = [];

export default function Home() {
  const { suggestions, addSuggestion, clearSuggestion, selectedSuggestion } = useAppContext();

  const [pokemonData, setPokemonData] = useState<PokemonInfo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [submissionCount, setSubmissionCount] = useState(0);
  const [win, setWin] = useState(false)
  const [victoryData, setVictoryData] = useState({pokemon: "", sprite: "", id: 0})

  async function processSubmit(
    formData: FormData,
    inputValue: string | null = null
  ) {
    formData.set("text-input", suggestions[selectedSuggestion])

    setInputValue(""); // Clear the input value

    const response = await fetch("/api/pokemon", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      console.log("[!] Invalid Pokemon");
      return;
    }

    console.log("[+] Valid Pokemon");

    const responseData = await response.json();

    if (guesses.includes(responseData.result.pokemon)) {
      console.log("[!] Repeated Pokemon");
      return;
    }

    guesses.push(responseData.result.pokemon);
    setPokemonData([responseData.result, ...pokemonData]);

    if (checkWin(responseData.result)) {
        await fetch("/api/pokemon/increase", {
            method: "POST",
        });

        const response = await fetch("/api/pokemon/id", {
          method: "GET",
        });

        const responseIdData = await response.json();
        let id = responseIdData.id;

        setVictoryData({pokemon: responseData.result.pokemon, sprite: responseData.result.sprite, id: id})
        setWin(true)
    }

    // Increment the submission count
    setSubmissionCount(submissionCount + 1);
    window.scrollTo(0, 0);
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    processSubmit(formData);
  }

  return (
    <main className="min-h-screen flex items-start justify-center font-pokemon bg-fixed bg-no-repeat bg-cover bg-[url('/background.png')]">
      <div className="py-8 w-full sm:max-w-md">
        <img src="/title.png" alt="PokéGuess"/>
        {/* Display the submission count */}    
        <p className="bg-white p-2 rounded border-2 border-black my-4 box-content w-fit text-left text-gray-800 mb-4">TRIES: {submissionCount}</p>
        <form action="#" method="post" onSubmit={onSubmit}>
          <div className="mb-4">
            {win ?  <YouWin
            pokemonName={victoryData.pokemon}
            pokemonSprite={victoryData.sprite}
            id={victoryData.id}
            tries = {submissionCount}
          />: <AutoCompleteInput
              data={data}
              inputValue={inputValue}
              setInputValue={setInputValue}
              onSubmit={processSubmit}
            />}
          </div>
        </form>
        <PokemonList items={pokemonData} />
      </div>
    </main>
  );
}