import { kv } from "@vercel/kv";

export async function GET(request: Request) {
    let lastPokemon = await kv.get("lastPokemon")

    return new Response(JSON.stringify({pokemon: lastPokemon}));
}
