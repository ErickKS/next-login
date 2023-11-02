"use client";

import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/input";
import { Mail, LockKeyhole } from "lucide-react";
import { Button } from "@/components/button";

export default function Home() {
  function handleSignIn() {}
  function handleSignInWithGoogle() {}

  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <Image src={"/logo.svg"} alt="logo" height={70.64} width={105.25} priority />

      <div className="flex flex-col gap-9 max-w-[480px] w-full px-16 mt-10 mb-5">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl text-white">Sign in</h1>
          <p className="text-[#A1A1A1]">Login to manage your account</p>
        </div>

        <div className="flex flex-col gap-4">
          <Input type="email" id="email" placeholder="Email" iconStart={Mail} />
          <Input type="password" id="password" placeholder="Password" iconStart={LockKeyhole} autoComplete="off" />
        </div>

        <div className="flex flex-col gap-4">
          <Button variant="primary" onClick={handleSignIn}>
            Sign In
          </Button>

          <div className="flex items-center gap-6">
            <div className="flex-1 h-[1px] bg-[#4A494A]" />
            <span className="text-sm text-[#4A494A] font-semibold">OR</span>
            <div className="flex-1 h-[1px] bg-[#4A494A]" />
          </div>

          <Button variant="secondary" onClick={handleSignInWithGoogle}>
            <Image src={"/google.svg"} alt="" height={24} width={24} />
            Sing In with Google
          </Button>
        </div>
      </div>

      <span className="text-[#A1A1A1] font-medium">
        Don’t have an account?{" "}
        <Link href={"/sign-up"} className="text-[#005EF3]">
          Sign Up
        </Link>
      </span>
    </main>
  );
}
