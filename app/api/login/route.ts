import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import crypto from "crypto";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const file = path.join(process.cwd(), "data/db.json");
  const db = JSON.parse(fs.readFileSync(file, "utf8"));

  const user = db.users[username];
  if (!user) return NextResponse.json({ error: "Invalid user" }, { status: 400 });

  const hash = crypto.createHash("sha256").update(password).digest("hex");

  if (user.password !== hash)
    return NextResponse.json({ error: "Wrong password" }, { status: 400 });

  const res = NextResponse.json({ success: true, id: user.id });
  res.headers.set("Set-Cookie", `lazyai_user=${user.id}; Path=/; HttpOnly;`);
  return res;
}
