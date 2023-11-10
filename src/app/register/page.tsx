"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { Mail, LockKeyhole } from "lucide-react";

import { signUpWithCredentials } from "@/utils/firebase";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Toast } from "@/components/toast";
import { SignInGoogle } from "@/components/sign-in-google";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailAlert, setEmailAlert] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);

  const [toastActive, setToastActive] = useState(false);

  const router = useRouter();

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;

    if (!value) return;

    if (name === "email") {
      setEmailAlert(false);
      setEmail(value);
    } else {
      setEmailAlert(false);
      setPassword(value);
    }
  }

  function handleToast() {
    setToastActive(false);
    setTimeout(() => setToastActive(true), 100);
  }

  function validations() {
    if (!email) setEmailAlert(true);
    if (!password) setPasswordAlert(true);

    return !(!email || !password);
  }

  async function handleSignIn() {
    const isValidValues = validations();

    if (!isValidValues) return;

    const result = await signUpWithCredentials(email, password);

    if (result === "success") {
      router.push("/congrats");
    } else {
      handleToast();
      return;
    }
  }

  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen px-6">
        <Image src={"/logo.svg"} alt="logo" height={70.64} width={105.25} priority />

        <div className="flex flex-col gap-9 max-w-[340px] w-full mt-10 mb-5">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl text-white">Create Account</h1>
          </div>

          <div className="flex flex-col gap-4">
            <Input type="email" id="email" placeholder="Email" iconStart={Mail} onChange={handleInputChange} alert={emailAlert} />
            <Input
              type="password"
              id="password"
              placeholder="Password"
              iconStart={LockKeyhole}
              autoComplete="off"
              onChange={handleInputChange}
              alert={passwordAlert}
            />
          </div>

          <div className="flex flex-col gap-4">
            <Button variant="primary" onClick={handleSignIn}>
              Sign Up
            </Button>

            <div className="flex items-center gap-6">
              <div className="flex-1 h-[1px] bg-[#4A494A]" />
              <span className="text-sm text-[#4A494A] font-semibold">OR</span>
              <div className="flex-1 h-[1px] bg-[#4A494A]" />
            </div>

            <SignInGoogle />
          </div>
        </div>

        <span className="max-w-[420px] text-center text-[#A1A1A1] font-medium">
          Already have an account?{" "}
          <Link href={"/"} className="text-[#005EF3] hover:underline">
            Sign In
          </Link>
        </span>
      </main>

      <Toast
        open={toastActive}
        onOpenChange={() => setToastActive(!toastActive)}
        alert={"Authentication failed. Please verify your credentials and try again."}
      />
    </>
  );
}
