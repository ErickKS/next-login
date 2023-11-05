"use client";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { Mail, LockKeyhole } from "lucide-react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "@/utils/firebase";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Toast } from "@/components/toast";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailAlert, setEmailAlert] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);

  const [toastActive, setToastActive] = useState(false);

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

    console.log(isValidValues);
    if (!isValidValues) return;

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error instanceof FirebaseError) {
        const { code } = error;

        if (code === "auth/invalid-login-credentials" || "auth/email-already-in-use") handleToast();
      }
    }
  }

  function handleSignInWithGoogle() {}

  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen px-6">
        <Image src={"/logo.svg"} alt="logo" height={70.64} width={105.25} priority />

        <div className="flex flex-col gap-9 max-w-[340px] w-full mt-10 mb-5">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl text-white">Welcome</h1>
            <p className="text-center text-[#A1A1A1]">Login to manage your account</p>
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
              Login
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

        <span className="max-w-[420px] text-center text-[#A1A1A1] font-medium">
          Don’t have an account?{" "}
          <Link href={"/sign-up"} className="text-[#005EF3] hover:underline">
            Sign Up
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
