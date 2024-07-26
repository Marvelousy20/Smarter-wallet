/* eslint-disable @next/next/no-img-element */
"use client";


import Image from "next/image";
import Link from 'next/link'
import { MdOutlineArrowBackIos } from "react-icons/md";
import FloatingInput from "@/components/FloatingLabelInput";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();
    return (
        <div className="text-white relative pt-11 min-h-screen">
            <div className="absolute top-0 left-0 right-0 w-full h-full">
                <img src="/auth/w2.png" alt="W2" className="h-full w-full bg-cover" />
            </div>

            <div className="relative px-8 ">
                <div className="flex justify-between py-6">
                    <span onClick={() => router.back()}>
                        <MdOutlineArrowBackIos size={24} />
                    </span>
                    <h1 className="text-sm font-semibold">Login</h1>
                    <Image src="/logoo.svg" alt="logo" width={24} height={24} />
                </div>

                <div className="space-y-6 mt-10">
                    <FloatingInput label="Email address" type="email" />
                    <FloatingInput label="Password" type="email" />
                    <Link href='./acct-recovery' className='flex justify-end text-[#819DF5] font-[400] text-[0.75rem] underline cursor-pointer'>
                        <p>Forget password?</p>
                    </Link>

                </div>

                <div className="mt-[15.5rem]">
                    <p className="text-[0.75rem] text-white text-gradient-fade text-center">
                        Register a new account
                    </p>
                </div>

                <Button variant={"register"} className="mt-4 rounded-[80px]">
                    Register
                </Button>
            </div>
        </div>
    );
};

export default Login;
