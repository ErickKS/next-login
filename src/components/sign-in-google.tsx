import Image from "next/image";

import { signInWithGoogle } from "@/utils/firebase";

import { Button } from "./button";

export function SignInGoogle() {
  async function handleSignIn() {
    const result = await signInWithGoogle();

    if (result === "success") {
      alert("sucesso");
    }
  }

  return (
    <Button variant="secondary" onClick={handleSignIn}>
      <Image src={"/google.svg"} alt="" height={24} width={24} />
      Continue with Google
    </Button>
  );
}
