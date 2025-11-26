import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import crypto from "crypto";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const file = path.join(process.cwd(), "data/db.json");
  const db = JSON.parse(fs.readFileSync(file, "utf8"));

  if (db.users[username]) {
    return NextResponse.json({ error: "Username exists" }, { status: 400 });
  }

  const hash = crypto.createHash("sha256").update(password).digest("hex");
  const uid = Date.now().toString();

  db.users[username] = { username, password: hash, id: uid };
  db.chats[uid] = [];

  fs.writeFileSync(file, JSON.stringify(db, null, 2));

  const res = NextResponse.json({ success: true, id: uid });
  res.headers.set("Set-Cookie", `lazyai_user=${uid}; Path=/; HttpOnly;`);
  return res;
}
