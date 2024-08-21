import React from "react";
import { useState } from "react";
import Button from "./button";
const First = () => {
  const [Count, SetCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center bg-[#3c565f] w-[400px] mx-auto p-4 rounded">
      <h1 className="text-center text-4xl text-white bg-[#1e293b] px-5 py-2 rounded font-Pacifico">Counter: {Count}</h1>
      <div className="bg-slate-300 px-5 py-2 rounded flex gap-4 w-fit">
        <button className="bg-[#343038] text-gray-200 px-3 py-1 rounded" onClick={() => SetCount(Count + 1)}>Increment</button>
        <button className="bg-[#343038] text-gray-200 px-3 py-1 rounded" onClick={() => SetCount(0)}>Refresh</button>
        <button className="bg-[#343038] text-gray-200 px-3 py-1 rounded" onClick={() => SetCount(Count - 1)}>Decrement</button>
      </div>
      ;
    </div>
  );
};

export default First;