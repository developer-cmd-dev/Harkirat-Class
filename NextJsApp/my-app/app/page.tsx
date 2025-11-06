import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen flex items-center justify-center ">
      <div className=" ">
          <Link className="bg-green-500 py-2 px-5 rounded-xl text-2xl text-black hover:bg-white" href={"/signup"}>Sign Up</Link>
      </div>
      
    </div>
  );
}
