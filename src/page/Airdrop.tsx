import { useState } from 'react';
import Web3 from 'web3';
const web3 = new Web3('https://bsc-dataseed.binance.org/');
export default function Airdrop() {
  const [address, setAddress] = useState<string>("")
  const isValidBEP20Address = (address: string) => {
    try {
      return web3.utils.isAddress(address);
    } catch (error) {
      console.error('Error verifying BEP20 address:', error);
      return false;
    }
  };
  const handleSaveAddress = () => {
    if (isValidBEP20Address(address)) {
      console.log('Valid BEP20 address:', address);
    } else {
      console.log('Invalid BEP20 address:', address);
    }
  }
  return (
    <div className="Ranking max-w-full mx-auto text-white max-sm:h-[78vh] mt-12">
      <div className="flex flex-col justify-center items-center gap-5">
        <img src="image/assets/wallet.png" alt="" className="w-24 h-24" />
        <h2 className="text-sm text-[white]">
          Submit your bep20 wallet address
        </h2>
        <div className="flex w-[80%] relative">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className=" bg-gradient-to-r from-[#556166] to-[#293337] p-4 border border-[white] border-solid rounded-[10px] w-full"
          />
          <img src="image/icon/input.png" alt="" className="absolute top-[30%] right-[10px] w-5 h-5"/>
        </div>
        <button className="bg-[#33CC66] text-[white] w-[fit-content] rounded-[10px] flex justify-center items-center text-xl gap-2 p-2" onClick={handleSaveAddress}>
          <img src="image/icon/submit.png" alt="" className=" w-6 h-6 " />
          Submit
        </button>
      </div>
    </div>
  );
}
