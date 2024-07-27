/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  return (
    <div className="text-white relative pt-[7rem] min-h-screen">
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <img src="/auth/w2.png" alt="W2" className="h-full w-full bg-cover" />
      </div>

      <div className="relative px-8">
        <div className="text-center flex justify-center">
          <Image src="/auth/illus.png" alt="illus" width={229} height={251} />
        </div>

        <div className="space-y-6 flex flex-col items-center justify-center mt-4">
          <h1 className="text-2xl welcome-gradient">Register Succesfully</h1>

          <p className="text-opacity-50 text-white text-center text-[0.75rem] leading-[20px]">
            Now you can have registered with both password in your device and
            email in the wallet server and decentralized storage via MPC.
          </p>
        </div>

        <div className="mt-[8rem] relative">
          <Button
            variant={"register"}
            className="rounded-[80px]"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
