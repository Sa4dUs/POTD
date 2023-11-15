import { kv } from "@vercel/kv";

export async function GET(request: Request) {
    let id = await kv.get("id")

    return new Response(JSON.stringify({id: id}));
}
