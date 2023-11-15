import { kv } from "@vercel/kv";

export async function GET(request: Request) {
    let guessCount = await kv.get("guessCount")

    return new Response(JSON.stringify({count: guessCount}));
}

export async function POST(request: Request) {
    
    try {
        let oldGuessCount: number | null = await kv.get("guessCount");
        
        if (oldGuessCount != null) {
            let newGuessCount = oldGuessCount + 1
            await kv.set("guessCount", newGuessCount);
        }
    } catch (error) {
        console.log(error);
    }

    return new Response();
}
