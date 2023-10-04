import Seats from "@/components/Seats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full bg-[#242333] flex flex-col items-center justify-start  ">
      <div className="w-full px-3 py-2 flex justify-between items-center ">
        <p className="text-[#ffff00] text-4xl font-medium">CSIVIT</p>
        <p className="text-[#fff] text-3xl font-medium">Filmfiesta</p>
      </div>
      <div className="flex items-center space-x-7 mb-2">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#444451] h-[4vh] w-[3vw] m-[3px] rounded-tl-xl rounded-tr-xl "></div>
          <p className="text-slate-50">Booked</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#6d6e66] h-[4vh] w-[3vw] m-[3px] rounded-tl-xl rounded-tr-xl "></div>
          <p className="text-slate-50">Available</p>
        </div>
      </div>

      <div className="grid grid-cols-15  gap-x-10 ">
        <Seats />
      </div>
    </div>
  );
}
