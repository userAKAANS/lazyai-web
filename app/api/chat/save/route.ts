import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const cookie = req.headers.get("cookie") || "";
  const uid = cookie.split("lazyai_user=")[1]?.split(";")[0];

  if (!uid) return NextResponse.json({ error: "Not logged in" }, { status: 401 });

  const { messages } = await req.json();

  const file = path.join(process.cwd(), "data/db.json");
  const db = JSON.parse(fs.readFileSync(file, "utf8"));

  db.chats[uid] = messages; // overwrite full chat

  fs.writeFileSync(file, JSON.stringify(db, null, 2));

  return NextResponse.json({ success: true });
}
