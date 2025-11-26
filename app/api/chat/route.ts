import { NextResponse } from "next/server";
import { queryModel } from "../../../lib/huggingface";

export async function POST(req: Request) {
  const body = await req.json();
  const { messages, model } = body;

  const reply = await queryModel(messages, model);

  return NextResponse.json({ reply });
}
