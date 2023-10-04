"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tooltip } from "antd";
export default function Seat({ id, isSelected, onSelect }) {
  const [name, setName] = useState();
  const [branch, setBranch] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const handleChange = () => setOpen(!open);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Tooltip title={id}>
      <button
        className={`${
          isSelected ? "bg-[#444451]" : "bg-[#6d6e66]"
        } h-[4vh] w-[2vw] m-[2.2px] rounded-tl-xl rounded-tr-xl ${
          isSelected ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={() => {
          if (!isSelected) {
            router.push(`/book/${id}`);
          }
        }}
        disabled={isSelected}
      ></button>
    </Tooltip>
  );
}
