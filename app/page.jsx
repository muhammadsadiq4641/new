"use client";
import OpenModal from "./OpenModal";
import First from "./Increment";
import Navbar from "./navbar";
export default function Home() {
  return (
    <>
    <div className="container mx-auto">
      <Navbar />
      <OpenModal />
      <First /></div>
    </>
  );
}
