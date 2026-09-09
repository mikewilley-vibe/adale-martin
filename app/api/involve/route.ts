import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/content";

type InvolveBody = {
  mode?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  interests?: string[];
  message?: string;
  subject?: string;
};

export async function POST(request: NextRequest) {
  let body: InvolveBody;
  try {
    body = (await request.json()) as InvolveBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  const subject =
    body.subject?.trim() ||
    (body.mode === "sign"
      ? "Yard sign request"
      : body.mode === "updates"
        ? "Campaign updates signup"
        : "Volunteer signup");

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    body.phone ? `Phone: ${body.phone}` : "",
    body.address ? `Address / Neighborhood: ${body.address}` : "",
    body.interests?.length ? `Interests: ${body.interests.join(", ")}` : "",
    body.message ? `Message:\n${body.message}` : "",
  ].filter(Boolean);

  const text = lines.join("\n");
  const formspree = process.env.FORMSPREE_ENDPOINT;

  try {
    if (formspree) {
      const res = await fetch(formspree, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: body.phone ?? "",
          address: body.address ?? "",
          message: text,
          _subject: subject,
        }),
      });
      if (!res.ok) {
        return NextResponse.json(
          { error: "Could not send right now. Please email the campaign." },
          { status: 502 },
        );
      }
    } else {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            _subject: subject,
            _template: "box",
            message: text,
          }),
        },
      );
      if (!res.ok) {
        return NextResponse.json(
          { error: "Could not send right now. Please email the campaign." },
          { status: 502 },
        );
      }
    }
  } catch {
    return NextResponse.json(
      { error: "Could not send right now. Please email the campaign." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
