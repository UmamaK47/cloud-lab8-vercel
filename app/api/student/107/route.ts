import { NextResponse } from "next/server";

const data: Record<string, object> = {
  "107": { name: "Umama Khan", lab: 8 },
};

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;

  const student = data[params.id];

  if (!student) {
    return NextResponse.json(
      { error: "Not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(student);
}