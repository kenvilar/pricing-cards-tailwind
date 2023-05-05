import Image from "next/image";
import Column1 from "@/app/Column1";
import Column2 from "@/app/Column2";
import Column3 from "@/app/Column3";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-800">
        <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0 test">
          <Column1 />

          <Column2 />

          <Column3 />
        </div>
      </div>
    </>
  );
}
