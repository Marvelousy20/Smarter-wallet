/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col pt-[4.762rem] relative min-h-screen">
      {/* <div className="absolute top-0 w-full left-0">
        <Image src="/auth/w1.png" alt="W1" width={1000} height={1000} />
      </div> */}

      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <img src="/auth/w1.png" alt="W1" className="h-full w-full bg-cover" />
      </div>

      <div className="flex flex-row text-white px-6 relative z-10 space-x-2">
        <Image src="/logoo.svg" alt="logo" width={25} height={25} />
        <span>Smarter Wallet</span>
      </div>

      <div className="px-6 mt-[4.1rem] relative z-10">
        <p className="text-[2.5rem] font-[300] leading-[3.063rem] text-white mb-[1.563rem] text-gradient-fade">
          Welcome
        </p>

        <p className="font-[300] leading-6 text-white  mb-[2.938rem] max-w-[16rem]">
          Directly get what you want via countless third-party account{" "}
          <span className="text-gradient-fade">applications!</span>
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-x-6 justify-center items-center">
            <Image src="/Group.svg" alt="group" width={28} height={28} />
            <p className="text-[0.75rem] font-[300] leading-[1rem] text-white pt-1">
              Demand
            </p>
            <p className="text-[0.75rem] font-[300] leading-[1rem] text-white">
              authentication
            </p>
          </div>
          <div className="flex flex-col gap-x-6 justify-center items-center">
            <Image src="/vector.svg" alt="vector" width={24} height={24} />
            <p className="text-[0.75rem] font-[300] leading-[1rem] text-white pt-1">
              Account
            </p>
            <p className="text-[0.75rem] font-[300] leading-[1rem] text-white ">
              Abstraction
            </p>
          </div>
          <div className="text-[0.75rem] font-[300] leading-[1rem] text-white flex flex-col justify-center items-center">
            <Image src="Union.svg" alt="union" width={24} height={24} />
            <p className="text-[0.75rem] font-[300] leading-[16px] text-white pt-1">
              Automated
            </p>
            <p className="text-[0.75rem] font-[300] leading-[1rem] text-white">
              AI trading bot
            </p>
          </div>
        </div>

        <div className="space-y-5 mt-12">
          <Button className="bg-white h-12 w-full rounded-[80px] text-black text-sm font-semibold">
            Login
          </Button>
          <Button
            variant={"register"}
            className="rounded-[80px] text-sm font-semibold"
            onClick={() => router.push("/register")}
          >
            Register
          </Button>
        </div>
      </div>
    </main>
  );
}
