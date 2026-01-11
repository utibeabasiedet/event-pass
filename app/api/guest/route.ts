import { NextResponse } from "next/server";
import { rsvpSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = rsvpSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid form data",
          issues: parsed.error.issues,
        },
        { status: 400 }
      );
    }

    const res = await fetch("https://eventpass-api.solanix.ng/api/guest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
      cache: "no-store",
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: data?.message || "Submission failed",
          data,
        },
        { status: res.status }
      );
    }

    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, message: e?.message || "Unexpected error" },
      { status: 500 }
    );
  }
}
