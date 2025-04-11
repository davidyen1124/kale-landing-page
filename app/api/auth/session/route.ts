import { NextResponse } from "next/server";
import { auth } from "@/app/auth";

export async function GET() {
  const session = await auth();

  return NextResponse.json({
    user: session?.user || null,
  });
}
