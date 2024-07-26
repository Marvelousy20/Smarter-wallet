/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { MdOutlineArrowBackIos } from "react-icons/md";
import FloatingInput from "@/components/FloatingLabelInput";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  return (
    <div className="text-white relative pt-11 min-h-screen">
      {/* <div className="absolute top-0 left-0 w-full">
        <Image
          src="/auth/w2.png"
          alt="W2"
          width={1000}
          height={1500}
          objectFit="cover"
          className="h-full"
        />
      </div> */}
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <img src="/auth/w2.png" alt="W2" className="h-full w-full bg-cover" />
      </div>

      <div className="relative px-8 ">
        <div className="flex justify-between py-6">
          <span onClick={() => router.back()}>
            <MdOutlineArrowBackIos size={24} />
          </span>
          <h1 className="text-sm font-semibold">Sign Up</h1>

          <Image src="/logoo.svg" alt="logo" width={24} height={24} />
        </div>

        <div className="space-y-6 mt-10">
          <FloatingInput label="Password" type="password" />
          <FloatingInput label="Confirm Password" type="password" />
          <FloatingInput label="Email" type="email" />

          <div className="flex gap-x-4 w-full">
            <div>
              <FloatingInput label="Code" type="text" />
            </div>

            <div className="w-[50%]">
              <Button variant={"register"} className="h-16 rounded-[16px]">
                Send
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-[7.3rem] ">
          <p className="text-[0.75rem]">
            <span className="text-gradient-fade">
              By proceeding, you agree to our
            </span>{" "}
            Term and Conditions
          </p>
        </div>

        <Button variant={"register"} className="mt-4 rounded-[80px] ">
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
