export async function queryModel(messages: any[], modelName: string) {
  const res = await fetch("https://router.huggingface.co/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.HF_TOKEN}`
    },
    body: JSON.stringify({
      model: modelName,
      messages: messages
    })
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "Model error.";
}
