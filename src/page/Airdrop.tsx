export default function Airdrop() {
  return (
    <div className="Ranking max-w-full mx-auto text-white max-sm:h-[78vh] mt-8">
        <div className="flex flex-col justify-center items-center gap-5">
            <img src="image/assets/wallet.png" alt="" className="w-24 h-24"/>
            <h2 className="text-xl text-[white]">Submit your bep20 wallet address</h2>
            <input type="text" className=" bg-gradient-to-r from-[#556166] to-[#293337] p-4"/>
        </div>
    </div>
  );
}
