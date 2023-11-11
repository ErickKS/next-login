"use client";

import Image from "next/image";

import { Button } from "@/components/button";
import { useRouter } from "next/navigation";

export default function Congrats() {
  const router = useRouter();

  function exit() {
    router.push("/");
  }

  return (
    <main className="flex flex-col justify-center items-center min-h-screen px-6">
      <Image src={"/logo.svg"} alt="logo" height={70.64} width={105.25} priority />

      <div className="flex flex-col items-center gap-9 max-w-[340px] w-full mt-10 mb-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl text-white">Congratulations</h1>
          <p className="text-center text-[#A1A1A1]">You login is complete.</p>
        </div>

        <span className="text-xl text-white font-medium">That it&apos;s! 😃</span>

        <Button variant="primary" onClick={exit} additionalClass="w-full max-w-[170px]">
          Exit
        </Button>
      </div>
    </main>
  );
}
