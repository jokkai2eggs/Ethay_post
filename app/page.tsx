'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const queryParams = useSearchParams()
  // const contractAddress = '0x2612D031139ecC9F2FB6833409669e1392C82eFe'

  // const mockData = {
  //   name: 'John Doe',
  //   age: 30,
  // }

  return (
    <div className=" w-[500px] flex flex-col gap-y-4 bg-primary">
      {queryParams.toString()}
      <Image src="/logo.png" alt="logo" width={400} height={0} />
    </div>
  )
}
