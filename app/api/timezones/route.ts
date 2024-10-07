import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const location = searchParams.get("location");

  if (!location) {
    return NextResponse.json(
      { error: "Location is required" },
      { status: 400 }
    );
  }

  try {
    const response = await axios.get(
      `http://worldtimeapi.org/api/timezone/${location}`
    );
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error("Error fetching time zone data:", error);
    const errorMessage =
      axios.isAxiosError(error) && error.response
        ? `Axios error: ${error.response.status} - ${error.response.statusText}`
        : error instanceof Error
        ? error.message
        : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
