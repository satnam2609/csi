"use client";

import { useState, useEffect } from "react";
import Seat from "./Seat";
import { Select } from "antd";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Seats() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadSelectedSeats = async () => {
    setLoading(false);
    const response = await fetch("http://localhost:3000/api/book", {
      cache: "no-cache",
    });
    if (response.ok) {
      setLoading(false);
      let objects = response.json();
      return objects;
    }
  };

  useEffect(
    () => () =>
      loadSelectedSeats().then((res) => {
        setSelectedSeats(res.map((obj) => obj.seatId));
      }),
    []
  );

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const renderSeats = () => {
    const totalRows = 18;
    const seatsPerRow = 15;
    const seats = [];

    for (let row = 1; row <= totalRows; row++) {
      for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber++) {
        const seatId = `(${totalRows - row + 1}-${seatNumber})`;
        const isSelected = selectedSeats.includes(seatId);

        seats.push(
          <Seat
            key={seatId}
            id={seatId}
            isSelected={isSelected}
            onSelect={handleSeatClick}
          />
        );
      }
    }

    return seats;
  };

  return renderSeats();
}
