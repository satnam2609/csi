"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

import { Select, message, Spin } from "antd";
import axios from "axios";

export default function SeatRegisterationForm({}) {
  const params = useParams();
  const { id } = params;
  const [name, setName] = useState("");
  const [divison, setDivision] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (name === "" || branch === "" || year === "" || divison === "") {
      setLoading(false);
      const form = ev.target;
      form.reset();
      message.error("Please fill out of fields!");
      return;
    }
    const BranchData = branch + year + divison;
    setLoading(true);
    const response = await fetch("http://localhost:3000/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        BranchData,
        id,
      }),
    });

    if (response.ok) {
      const form = ev.target;
      form.reset();
      setLoading(false);
      message.success("Seat Booked!");
      router.replace("/");
    } else {
      setLoading(false);
      const form = ev.target;
      form.reset();
      message.error("Try again");
    }
  };
  return (
    <div className="w-full h-screen grid place-content-center bg-[#242333]">
      <div className="shadow-2xl border-t-4 rounded-t-lg p-8 bg-[#282734]">
        <h1 className="text-3xl font-serif font-medium text-[#eeeeee] mb-5">
          Book your seat
        </h1>
        <form
          className="flex flex-col items-center space-y-4 px-3 w-full"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className="outline-none text-[#121212]  bg-[#fff] w-full  px-3 py-1 rounded-md"
          />
          <Select
            className="w-full"
            onChange={(yr) => setYear(yr)}
            defaultValue={"Select your Year"}
            options={[
              {
                value: "FE",
                label: "FE",
              },
              {
                value: "SE",
                label: "SE",
              },
              {
                value: "TE",
                label: "TE",
              },
              {
                value: "BE",
                label: "BE",
              },
            ]}
          />
          <Select
            className="w-full"
            onChange={(br) => setBranch(br)}
            defaultValue={"Select your Branch"}
            options={[
              {
                value: "CMPN",
                label: "CMPN",
              },
              {
                value: "INFT",
                label: "INFT",
              },
              {
                value: "EXTC",
                label: "EXTC",
              },
              {
                value: "ETRX",
                label: "ETRX",
              },
            ]}
          />
          <Select
            className="w-full"
            onChange={(div) => setDivision(div)}
            defaultValue={"Select your division"}
            options={[
              {
                value: "A",
                label: "A",
              },
              {
                value: "B",
                label: "B",
              },
            ]}
          />
          <button className="bg-[#ffff00] px-3 py-2 w-full text-slate-800 rounded-lg">
            {loading ? <Spin /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
