import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  const cookie = req.headers.get("cookie") || "";
  const uid = cookie.split("lazyai_user=")[1]?.split(";")[0];

  if (!uid) return NextResponse.json({ messages: [] });

  const file = path.join(process.cwd(), "data/db.json");
  const db = JSON.parse(fs.readFileSync(file, "utf8"));

  return NextResponse.json({ messages: db.chats[uid] || [] });
}
