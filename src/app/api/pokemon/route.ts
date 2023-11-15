import { getRandomInt } from "@/lib/misc";
import { isValidPokemon, checkPokemon } from "@/lib/pokeapi";
import PokemonInfo from "@/types/PokemonInfo";

export async function GET(request: Request) {
  return new Response("Welcome to '/api/pokemon' route")
}

export async function POST(request: Request) {
  const formData: FormData = await request.formData()
  let input: string = Object.fromEntries(formData)["text-input"].toString().trim().replaceAll(" ", "-");
  
  if (!(await isValidPokemon(input))) {
    return new Response("Invalid Pokemon", {status: 400});
  }

  let result = await checkPokemon(input)

  return new Response(JSON.stringify({ message: "Success", result }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}