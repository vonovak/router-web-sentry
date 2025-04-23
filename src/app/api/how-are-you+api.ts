import ky from "ky";
import { init } from "@sentry/node";

export async function POST(req: Request) {
  const text = await ky("https://jsonplaceholder.typicode.com/todos/1").text();
  console.log({ init });
  return new Response(text.toString(), {
    status: 200,
  });
}
