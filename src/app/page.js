"use client"
import Counter from "@/components/Counter/Counter";
import Navbar from "@/components/Shared/Navbar";

const page = () => {

  return (
    <div>
      <Navbar />
      <h1 className="text-4xl text-center mt-5">Welcome to Next Js Home Page</h1>
      <Counter />
    </div>
  );
};

export default page; 