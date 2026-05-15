// app/api/geo/route.ts
export const runtime = "edge"; // ← switches this to Edge Runtime
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
 return NextResponse.json({
 country: req.geo?.country || "Only available on production",
 city: req.geo?.city || "Test on your deployed URL",
 runtime: "edge",
 });
}