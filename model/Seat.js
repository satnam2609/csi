import mongoose, { Schema, models } from "mongoose";

const seatSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  BranchData: {
    type: String,
  },
  seatId: {
    type: String,
    unique: true,
  },
});

const Seat = models.Seat || mongoose.model("Seat", seatSchema);

export default Seat;
