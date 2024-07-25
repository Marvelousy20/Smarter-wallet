import Image from "next/image";
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button"



export default function Home() {
  return <main className="bg-black flex flex-col p-[1.5rem]" >
    <div className ="flex flex-row pt-[4.762rem] mb-[66.98px]">
      <Image src='/logoo.svg' alt ='logo' width={38.02} height={38.02}/>
      <Image src='/text.svg' alt='text' height={121.98}  width={125.07}/>
    </div>
    <p className="text-[2.5] font-[300] leading-[3.063rem] text-[white] mb-[1.563rem]">
      Welcome
    </p>
    
    <p className="text-[1rem] font-[300] leading-[24px] text-white  mb-[2.938rem]">
      Directly get what you want via countless third-party account applications!
    </p>
    <div className='flex flex-row gap-x-[34px] '>
      <div className='flex flex-col gap-x-[24px] justify-center items-center'>
      <Image src='/Group.svg' alt ='group' width={24} height={24}/>
      <p className="text-[0.75rem] font-[300] leading-[1rem] text-[white] pt-[4px] ">
        Demand 
      </p>
      <p  className="text-[0.75rem] font-[300] leading-[1rem] text-[white] ">
      authentication
      </p>

      </div>
      <div className='flex flex-col gap-x-[24px] justify-center items-center'>
      <Image src='/vector.svg' alt ='vector' width={24} height={24}/>
      <p  className="text-[0.75rem] font-[300] leading-[1rem] text-[white]  pt-[4px] ">
      Account
     
      </p>
      <p className="text-[0.75rem] font-[300] leading-[1rem] text-[white] ">
      Abstraction
      </p>

      </div>
      <div className="text-[0.75rem] font-[300] leading-[1rem] text-[white] justify-center items-center">
      <Image src='Union.svg' alt ='union' width={24} height={28}/>
      <p  className="text-[12px] font-[300] leading-[16px] text-[white] pt-[4px] ">
      Automated
      </p>
      <p className="text-[0.75rem] font-[300] leading-[1rem] text-[white] ">
      AI trading bot
      </p>

      </div>

    </div>
   <button className="mt-[48px] bg-white font-[600] text-[0.875rem] leading-[1.5rem] w-[311px] h-[48px] rounded-[80px] text-black">
    Login
   </button>
   <button className="mt-[21px] bg-[#819DF5] font-[600] text-[0.875rem] leading-[1.5rem] w-[311px] h-[48px] rounded-[80px] text-white">
   Register
   </button>

   
   
    </main>;
}
