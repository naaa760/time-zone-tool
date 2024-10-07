import { NextResponse } from "next/server";

let meetings: any[] = []; // In-memory storage for meetings

export async function POST(req: Request) {
  const meeting = await req.json();
  meeting.id = meetings.length + 1; // Assign an ID
  meetings.push(meeting);
  return NextResponse.json(meeting, { status: 201 });
}

export async function GET() {
  return NextResponse.json(meetings, { status: 200 });
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Meeting ID is required" },
      { status: 400 }
    );
  }

  meetings = meetings.filter((meeting) => meeting.id !== Number(id));
  return NextResponse.json({ message: "Meeting deleted" }, { status: 200 });
}
