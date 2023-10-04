import Seat from "@/model/Seat";
import { connectDb } from "@/libs/config";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDb();
    const { name, BranchData, id } = await req.json();
    let seat = await Seat.create({ name, BranchData, seatId: id });
    return NextResponse.json(seat, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectDb();
  const seats = await Seat.find({}).select("seatId");

  return NextResponse.json(seats);
}
