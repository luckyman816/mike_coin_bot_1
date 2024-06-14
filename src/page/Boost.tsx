import { dispatch, useSelector } from "../store";
import { useEffect, useState } from "react";
export default function Boost() {
  const tokenState = useSelector((state) => state.wallet.user?.balance);
  const [token, setToken] = useState<number>(tokenState)
  useEffect(() => {
    setToken(tokenState)
  }, [tokenState])
  return (
    <div className="Boost max-w-full text-white h-[75vh] max-sm:h-[82vh] mt-12 mx-5">
      <div className="md:w-full h-[65vh] mx-auto flex flex-col justify-center ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-3  max-w-[500px] mx-auto text-start text-white flex justify-center">
            Your Balance
          </h1>
          <div className="flex px-3 py-1 gap-5 text-white text-lg font-bold justify-center align-middle overflow-y-hidden">
            <img src="/image/dollar.png" alt="" className="w-10 h-10" />
            <h1 className="text-4xl">{token}</h1>
          </div>
        </div>
        <hr className="my-3 border-[#363636] border-1" />
        <div className="flex justify-start">
          <h1 className="text-white text-xl">Free daily boosters</h1>
        </div>
        <div
          className={`flex my-3 px-5 py-3 items-center bg-[#4d4d4c] rounded-[30px] hover:bg-[#3a3a3a]`}
        >
          <img src="/image/icon/lightning.svg" alt="" className="w-10 h-10" />
          <div className="flex flex-col">
            <h3 className="text-2xl text-white">Full energy</h3>
            <h3 className="text-xl text-[#a8a8a7]">6/6 available</h3>
          </div>
        </div>
        <div className="flex justify-start">
          <h1 className="text-white text-xl">Boosters</h1>
        </div>
        <div
          className={`flex my-3 px-5 py-3 items-center bg-[#4d4d4c] rounded-[30px] gap-2 hover:bg-[#3a3a3a]`}
        >
          <img src="/image/double-tap.png" alt="" className="w-10 h-10" />
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl text-white text-left">Multitap</h3>
            <div className="flex gap-3 align-middle">
              <img src="/image/dollar.png" alt="" className="w-5 h-5" />
              <h3>2K * 2M</h3>
            </div>
          </div>
        </div>
        <div
          className={`flex my-3 px-5 py-3 items-center bg-[#4d4d4c] rounded-[30px] gap-2 hover:bg-[#3a3a3a]`}
        >
          <img src="/image/battery.png" alt="" className="w-10 h-10" />
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl text-white text-left">Energy limit</h3>
            <div className="flex gap-3 align-middle">
              <img src="/image/dollar.png" alt="" className="w-5 h-5" />
              <h3>2K * 2M</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}