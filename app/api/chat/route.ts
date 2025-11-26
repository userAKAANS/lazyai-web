import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { messages, model } = await req.json();

  const HF_TOKEN = process.env.HF_TOKEN;

  const payload = {
    model: "deepseek-ai/DeepSeek-V3.2-Exp:novita",
    messages,
  };

  const res = await fetch(
    "https://router.huggingface.co/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }
  );

  const data = await res.json();

  const reply = data.choices?.[0]?.message?.content ?? "AI failed to respond.";

  return NextResponse.json({ reply });
}
