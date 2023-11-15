import { kv } from "@vercel/kv";
import { generateRandomPokemon } from "@/lib/pokeapi";

export async function GET(request: Request) {
    let pokemon = (await generateRandomPokemon()).name;
    let lastPokemon = await kv.get("currentPokemon")
    let id: number | null = await kv.get("id")
    
    await kv.set("lastPokemon", lastPokemon);
    await kv.set("currentPokemon", pokemon);
    console.log(await kv.get("currentPokemon"))
    
    if (id != null) {
        console.log(id)
        await kv.set("id", id + 1)
    }


    return new Response("Welcome to '/api/pokemon/generate' route");
}
